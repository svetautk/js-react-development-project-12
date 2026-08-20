import { Button, Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

function LoginPage() {
    const form = useForm({
        mode: 'controlled',
        initialValues: { name: '', password: '' },
    })

    return (
        <form>
            <h1>Войти</h1>
            <TextInput {...form.getInputProps('name')} placeholder="Ваш ник" />
            <TextInput {...form.getInputProps('password')} mt="md" placeholder="Пароль" />
            <Button type="submit" mt="md">
                Войти
            </Button>
        </form>
    )
}