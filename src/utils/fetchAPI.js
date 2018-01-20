function prepareFetchOptions(method) {
  let request_method = method || 'GET'
  return {
    method: request_method,
  }
}

export async function fetchAPI(url, method) {
  let fetch_options = prepareFetchOptions(method)
  const response = await fetch(url, fetch_options)
  if (response.status >= 200 && response.status < 300) {
    let data = await response.text()
    try {
      data = JSON.parse(data)
    } catch (error) {
      console.log(error, 'error')
    }
    return data
  }
}