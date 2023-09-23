
export const logInWithApi = async (page, request, context, email, password) => {
  const response = await request.post(
    `${process.env.API_BASE_URL}/user/login`,
    {
      data: {
        email,
        password,
      }
    }
  )

  const headers = response.headers()
  const cookies = headers['set-cookie'].split('\n')
  const setCookies = []

  for (const cookie of cookies) {
    const pairs = cookie.split('; ')
    const object = {}

    const [name, value] = pairs.shift().split('=')
    object['name'] = name
    object['value'] = value

    for (const pair of pairs) {
      let [key, value] = pair.split('=')

      if (key === 'Expires') {
        value = Date.parse(value) / 1000
      }

      object[`${key.charAt(0).toLowerCase() + key.slice(1)}`] = value || true
    }

    setCookies.push(object)
  }

  await page.goto('/')
  await context.addCookies(setCookies)
  await page.reload()
}









// //Helper
// export const logInWithApi = async (page, request, context, email, password) => {
//   const response = await request.post(`${process.env.API_BASE_URL}/user/login`, {
//     data: {
//       email,
//       password,
//     },
//   })
//
//   const headers = response.headers() //достали респонс
//   const cookies = headers['set-cookie'].split('\n') //ищем хеадер с 'set-cookie' и делим на 2 строки
//   const setCookies = []
//   //из строки вытащили в обьект. потом достаем значения name value
//   for (const cookie of cookies) {
//     const pairs = cookie.split('; ')
//     const object = {}
//
//     const [name, value] = pairs.shift().split('=')
//     object['name'] = name
//     object['value'] = value
//     //цикл проходит по оставиемся парам и делим их = и с нижним регистром начинается по документации
//     for (const pair of pairs) {
//       let [key, value] = pair.split('=')
//
//       if (key === 'Expires') {
//         //кука Expires переводится в unix format
//         value = Date.parse(value) / 1000
//       }
//
//       object[`${key.charAt(0).toLowerCase() + key.slice(1)}`] = value || true //если нет value то тру
//     }
//
//     setCookies.push(object) //заполняем куки как json object из строки вытащили
//   }
//
//   await page.goto('/')
//   await context.addCookies(setCookies) //array orj документация browser context
//   await page.reload()
// }
