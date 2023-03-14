import { app } from './app'
import { env } from './env'

// Run the server!
const start = async () => {
  try {
    await app.listen({ port: env.PORT })

    console.log('HTTP Server Running')
  } catch (err) {
    app.log.error(err)
  }
}
start()
