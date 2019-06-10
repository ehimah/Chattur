import axios from 'axios'

const formUrlEncoded = x =>
    Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')

const downloadStepUrls = {
    0: 'https://epms.nibss-plc.com.ng/TLM/?3-1.IBehaviorListener.0-downloadCSV',
    2: 'https://epms.nibss-plc.com.ng/TLM/?3-1.IBehaviorListener.2-downloadCSV',
    1: 'https://epms.nibss-plc.com.ng/TLM/?3-1.IBehaviorListener.1-downloadCSV',
    fileDownload: 'https://epms.nibss-plc.com.ng/TLM/?3-1.ILinkListener-downloadFile',
    dashboard: 'https://epms.nibss-plc.com.ng/TLM/dashboard'
}

const getSessionCookie = (username, password) => {
    return new Promise((resolve, reject) => {
        var config = {
            method: 'POST',
            url: 'https://epms.nibss-plc.com.ng/TLM/login?-1.IFormSubmitListener-form',
            headers:
            {
                Accept: '*/*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            maxRedirects: 0,
            data: formUrlEncoded({
                'form-login_hf_0': '',
                username: username,
                password: password
            }),
            validateStatus: status => status == 302
        };
        console.log("getSessionCookie: calling https://epms.nibss-plc.com.ng/TLM/login?-1.IFormSubmitListener-form")
        axios(config)
            .then((response) => {
                //refactor this to search for JSESSIONID in every string token.
                // This current implementation may fail when Session Cookie is returned as second cookie 
                var cookie = response['headers']['set-cookie'][0].split(';')[0];

                console.log("getSessionCookie:response", cookie)
                resolve(cookie)
            })
            .catch(error => {
                console.error("getSessionCookie:error", error.response)
                reject(error)
            })
    })
}

const fakeDashboardCall = (cookie) => {
    return new Promise((resolve, reject) => {
        var config = {
            headers:
            {
                Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                'accept-encoding': 'gzip, deflate, br',
                Connection: 'keep-alive',
                'Cache-Control': 'max-age=0',
                Host: 'epms.nibss-plc.com.ng',
                Referrer: `https://epms.nibss-plc.com.ng/TLM/login;${cookie}`,
                Cookie: cookie,
                'Upgrade-Insecure-Requests': 1,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
            }
        };
        var url = `${downloadStepUrls.dashboard}`
        console.log(`fakeDashboardCall:calling ${url}`)
        axios.get(url, config)
            .then(response => {
                console.log('fakeDashboardCall:responded')
                resolve(cookie)
            })
            .catch(error => {
                console.log('fakeDashboardCall:error', error.response.status)
                reject(error)
            })
    })
}

const initiateDownloadStep = (cookie, url) => {
    return new Promise((resolve, reject) => {
        var config = {
            headers:
            {
                'accept-encoding': 'gzip, deflate, br',
                Host: 'epms.nibss-plc.com.ng',
                'Wicket-Ajax-BaseURL': 'dashboard',
                'Wicket-Ajax': 'true',
                Accept: 'application/xml, text/xml, q=0.01',
                Cookie: cookie,
                'X-Requested-With': 'XMLHttpRequest',
                'Wicket-FocusedElementId': 'downloadCSV',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
            }
        };
        console.log(`initiateDownloadStep:calling: ${url}`)
        axios.get(url, config)
            .then(response => {
                console.log(`initiateDownloadStep:response for: ${url} with response ${response.status}`)
                resolve(cookie)
            })
            .catch(error => {
                console.error(`initiateDownloadStep:error for: ${url} with response ${error.response}`)
                reject(error)
            })
    })
}
const delay = (ms) => new Promise((resolve) => {
    console.log(`delaying for ${ms / 1000} seconds`)
    setTimeout(resolve, ms)
})

const downloadStep1 = (cookie => initiateDownloadStep(cookie, downloadStepUrls[0]))
const downloadStep2 = (cookie => initiateDownloadStep(cookie, downloadStepUrls[2]))
const downloadStep3 = (cookie => initiateDownloadStep(cookie, downloadStepUrls[1]))

const getFileStream = (cookie) => {
    return new Promise((resolve, reject) => {
        var config = {
            headers:
            {
                Cookie: cookie
            }
        };
        console.log(`getFileStream:calling for: ${downloadStepUrls.fileDownload}`)
        axios.get(downloadStepUrls.fileDownload, config)
            .then(response => {
                console.log(`getFileStream:success with response ${response.status}`)
                resolve(response)
            })
            .catch(error => {
                console.error(`getFileStream:error with response ${error.response.status}`)
                reject(error)
            })
    })
}


const downloadReport = (username, password) => {
    return new Promise((resolve, reject) => {
        getSessionCookie(username, password)
            // .then(fakeDashboardCall)
            .then(downloadStep1)
            .then(downloadStep2)
            .then(downloadStep3)
            .then(getFileStream)
            .then(resolve, reject)
            .catch(reject)
    })
}

export default downloadReport