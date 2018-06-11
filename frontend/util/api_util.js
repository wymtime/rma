const responseString = `{
    "headerData":["30%","$2000000","85%"],
    "contentA":"This should be displayed in Panel A. This is visible by default",
    "contentB":"This should be displayed in Panel B. This should be hidden by default"
 }`

export const fakeFetchData = () => new Promise((resolve) => {
    setTimeout(() => {
        const response = JSON.parse(responseString)
        resolve(response)
    }, 100)
})
