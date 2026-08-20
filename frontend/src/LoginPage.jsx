
import { useForm } from '@mantine/form'

function LoginPage() {
    const form = useForm({
        mode: 'controlled',
        initialValues: { name: '', password: '' },
    })

    return (
        <form>
            <h1>Войти</h1>
            <input {...form.getInputProps('name')} placeholder="Ваш ник" />
            <input {...form.getInputProps('password')} mt="md" placeholder="Пароль" />
            <button type="submit" mt="md">
                Войти
            </button>
        </form>
    )
}

export default LoginPage