const colorPickerInput = document.getElementById('color-picker')
const colorSchemeDropdown = document.getElementById('color-scheme-dropdown')

document.getElementById('get-color-scheme-btn').addEventListener('click', function () {
  const color = colorPickerInput.value.slice(1) // remove '#' — only once!
  const colorScheme = colorSchemeDropdown.value
  const url = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${colorScheme}`

  console.log(url) // Debug

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }
      return response.json()
    })
    .then(data => {
      const colorBoxes = document.querySelectorAll('.color-box')
      const colorCodes = document.querySelectorAll('.color-code-text')

      data.colors.forEach((color, index) => {
        const hex = color.hex.value

        if (colorBoxes[index]) {
          colorBoxes[index].style.backgroundColor = hex
        }

        if (colorCodes[index]) {
          colorCodes[index].textContent = hex
        }
      })
    })
    .catch(err => console.error("Something went wrong:", err))
})
