import React from 'react'
import Input from '../../ui/Input'
import Alert from '../../ui/Alert'
import Button from '../../ui/Button'
import { useForm, zod, zodResolver } from '../../../../framework/plugins/react-hook-form'
import { authController } from '../../../../controllers/AuthController'
import { useLoadingStore } from '../../../../framework/store'

export const AuthForm = () => {
  const { errors, handleSubmit, register } = useFields()
  const { loading } = useLoadingStore()

  return (
    <form onSubmit={handleSubmit(p => authController.signIn(p))} className='flex flex-col gap-3 mx-auto max-w-xs'>
      <Input
        disabled={loading}
        data-testid='input-email'
        label="Email"
        placeholder='Digite seu email'
        error={errors.email?.message}
        {...register('email')}
      />

      <Input
        disabled={loading}
        data-testid='input-password'
        label="Senha"
        placeholder='Digite seu senha'
        type="password"
        error={errors.password?.message}
        {...register('password')}
      />

      {!!errors.feedback?.message && (
        <Alert.Root type='warning'>
          <Alert.Text>{errors.feedback?.message}</Alert.Text>
        </Alert.Root>
      )}

      <Button
        data-testid='butto-submit'
        size='sm'
        type="submit"
        disabled={loading}
      >Entrar</Button>
    </form>
  )
}

const useFields = () => {
  const formSchema = zod.object({
    email: zod.string().nonempty('Campo obrigatório'),
    password: zod.string().min(6, 'A senha no mínimo deve ter 6 caracteres'),
    feedback: zod.string().optional()
  })

  type FormSchema = zod.infer<typeof formSchema>;

  const defaultValues: FormSchema = {
    email: 'joao@email.com',
    password: '123456'
  }

  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
    setError
  } = useForm<FormSchema>({ defaultValues, resolver: zodResolver(formSchema) });

  React.useEffect(() => {
    // appController.subscribeWatcher('feedbackForm', (message: string) => {
    //   setError('feedback', { message })
    // })
  }, [])

  return {
    handleSubmit,
    errors,
    control,
    register
  }
}
