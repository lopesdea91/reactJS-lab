import React from "react";
import { zod, useForm, zodResolver, FieldControlled } from "../../../framework/plugins/react-hook-form";
import { appController } from "../../../../controllers/AppController";
import { homeController } from "../../../../controllers/HomeController";
import Alert from "../../../shared/ui/Alert";
import Button from "../../../shared/ui/Button";
import Input from "../../../shared/ui/Input";

const Form = () => {
  const { control, errors, handleSubmit } = useFields()

  return (
    <form onSubmit={handleSubmit(p => homeController.onSubmit(p))} className='flex flex-col gap-3 mx-auto max-w-xs'>
      <FieldControlled
        control={control}
        name="email"
        render={(p) => <Input
          {...p.field}
          // disabled={loading}
          label="Email"
          placeholder='Digite seu email'
          error={p.fieldState.error?.message}
          onChange={(e) => p.field.onChange(e.target.value)} />
        }
      />
      <FieldControlled
        control={control}
        name="password"
        render={(p) => <Input
          {...p.field}
          // disabled={loading}
          label="Senha"
          placeholder='Digite seu senha'
          type="password"
          error={p.fieldState.error?.message}
          onChange={(e) => p.field.onChange(e.target.value)} />
        }
      />

      {!!errors.feedback?.message && (
        <Alert.Root type='warning'>
          <Alert.Text>{errors.feedback?.message}</Alert.Text>
        </Alert.Root>
      )}

      <Button
        size='sm'
        type="submit"
      // disabled={loading}
      >Entrar</Button>
    </form>
  )
}

export default Form


const useFields = () => {
  const formSchema = zod.object({
    email: zod.string().nonempty('Campo obrigatório'),
    password: zod.string().min(6, 'A senha no mínimo deve ter 6 caracteres'),
    feedback: zod.string().optional()
  })

  type FormSchema = zod.infer<typeof formSchema>;

  const defaultValues: FormSchema = {
    email: 'test1@email.com',
    password: '123456'
  }

  const {
    handleSubmit,
    formState: { errors },
    control,
    setError
  } = useForm<FormSchema>({ defaultValues, resolver: zodResolver(formSchema) });

  React.useEffect(() => {
    appController.subscribeWatcher('feedbackForm', (message: string) => {
      setError('feedback', { message })
    })
  }, [])

  return {
    handleSubmit,
    errors,
    control
  }
}

