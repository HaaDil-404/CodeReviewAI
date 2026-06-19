"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import {
    Controller,
    FormProvider,
    useFormContext,
    type ControllerProps,
    type FieldPath,
    type FieldValues,
} from "react-hook-form"

import { cn } from "@/lib/utils"

const Form = FormProvider

type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
    name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
    {} as FormFieldContextValue
)

const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    ...props
}: ControllerProps<TFieldValues, TName>) => {
    return (
        <FormFieldContext.Provider value={{ name: props.name }}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    )
}

const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext)
    const { getFieldState, formState } = useFormContext()

    const fieldState = getFieldState(fieldContext.name, formState)

    return {
        name: fieldContext.name,
        ...fieldState,
    }
}

function FormItem({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("space-y-2", className)} {...props} />
    )
}

function FormLabel({
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>) {
    return (
        <LabelPrimitive.Root
            className={cn("text-sm font-medium", className)}
            {...props}
        />
    )
}

function FormControl({
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return <div {...props} />
}

function FormMessage() {
    const { error } = useFormField()

    if (!error) return null

    return (
        <p className="text-sm text-red-500">
            {String(error.message)}
        </p>
    )
}

export {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
}