import config from '../../../config/index'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id

  const id = await generateUserId()
  //default password

  user.id = id

  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  console.log(user)

  const createUser = await User.create(user)

  if (!createUser) {
    throw new Error('Failed to create user!')
  }

  return createUser
}

export default {
  createUser,
}
