'use client'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import { Spinner } from '@/components/ui/spinner'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from '@/components/ui/field'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { RichText } from '@payloadcms/richtext-lexical/react'

const colSpans: Record<number, string> = {
    1: 'col-span-10 md:col-span-1',
    2: 'col-span-10 md:col-span-2',
    3: 'col-span-10 md:col-span-3',
    4: 'col-span-10 md:col-span-4',
    5: 'col-span-10 md:col-span-5',
    6: 'col-span-10 md:col-span-6',
    7: 'col-span-10 md:col-span-7',
    8: 'col-span-10 md:col-span-8',
    9: 'col-span-10 md:col-span-9',
    10: 'col-span-10 md:col-span-10',
    11: 'col-span-10 md:col-span-11',
    12: 'col-span-10 md:col-span-12',
}

export default function Form({ formId }: { formId: string }) {
    const [form, setForm] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<boolean>(false)

    useEffect(() => {
        async function fetchForm() {
            try {
                setLoading(true)
                setError(null)

                const res = await fetch(`/api/forms/${formId}`)

                if (!res.ok) {
                    const msg = await res.text()
                    throw new Error(`Error ${res.status}: ${msg}`)
                }

                const data = await res.json()
                setForm(data)
            } catch (err: any) {
                setError(err.message || 'Failed to load form')
            } finally {
                setLoading(false)
            }
        }
        fetchForm()
    }, [formId])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formEl = e.currentTarget
        const formData = new FormData(e.currentTarget)
        const dataToSend = Array.from(formData.entries()).map(([name, value]) => ({
            field: name,
            value: value.toString(),
        }))

        // send form data to payload

        try {
            const response = await fetch('/api/form-submissions', {
                method: 'POST',
                body: JSON.stringify({
                    form: formId,
                    submissionData: dataToSend,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) {
                throw new Error('Request failed')
            }

            setSuccess(true)
            setError(null)

            formEl.reset()
        } catch (error) {
            setSuccess(false)
            setError('Error submitting form')
        }
    }

    return (
        <>
            {loading ? (
                <div className="w-full h-full flex items-center justify-center">
                    <Spinner className="size-8" />
                </div>
            ) : (
                <div>
                    <form onSubmit={handleSubmit} className="">
                        <FieldGroup>
                            {form.fields.map((field: any) => (
                                <div key={field.id} className={`${colSpans[field.width]}`}>
                                    {/*JSON.stringify(field.blockType)*/}
                                    <Field>
                                        <FieldLabel htmlFor={field.id}>{field.label}</FieldLabel>
                                        {field.blockType === 'textarea' ? (
                                            <Textarea
                                                name={field.name}
                                                id={field.id}
                                                required={field.required}
                                                placeholder={field.placeholder}
                                            />
                                        ) : (
                                            <Input
                                                name={field.name}
                                                id={field.id}
                                                type={field.blockType}
                                                required={field.required}
                                                placeholder={field.placeholder}
                                            />
                                        )}
                                    </Field>
                                </div>
                            ))}
                        </FieldGroup>
                        <div className="mt-6">
                            <Button type="submit" className="w-fit">
                                {form.submitButtonLabel}
                            </Button>
                        </div>
                    </form>
                    {success && (
                        <div className="mt-6">
                            <Alert variant="success">
                                <FontAwesomeIcon icon={faCheck} />
                                <AlertTitle>
                                    <RichText data={form.confirmationMessage} />
                                </AlertTitle>
                            </Alert>
                        </div>
                    )}
                    {error && (
                        <div className="mt-6">
                            <Alert variant="destructive">
                                <FontAwesomeIcon icon={faX} />
                                <AlertTitle>{error}</AlertTitle>
                            </Alert>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}
