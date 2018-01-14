export async function fetchAPI(url) {
  const response = await fetch(url)
  if (response.status >= 200 && response.status < 300) {
    let data = await response.text()
    try {
      data = JSON.parse(data)
    } catch (error) {
      console.log(error,'error')
    }
    return data
  }
}