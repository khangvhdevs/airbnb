import qs from 'qs'
/**
 * 
 * @param {*} object
 * @returns search string used to query URL
 */
// js docs


export const generateQueryParams = (params) => {
    // qs.stringify -> parse JSON to URL params
    const queryParams = qs.stringify(params, {
        // return a string + ? mark
        addQueryPrefix: true,
    })

    return queryParams
}