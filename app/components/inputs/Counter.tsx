'use client'

import { FC, useCallback } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

interface CounterProps {
  title: string
  subtitle: string
  value: number
  onChange: (value: number) => void
}

export const Counter: FC<CounterProps> = ({ onChange, value, title, subtitle }): JSX.Element => {
  const onAdd = useCallback(() => {
    onChange(value + 1)
  }, [onChange, value])

  const onReduce = useCallback(() => {
    if (value === 1) {
      return
    }

    onChange(value - 1)
  }, [onChange, value])

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>

      <div className="flex flex-row items-center gap-4">
        <div
          onClick={onReduce}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-neutral-400 text-neutral-600 transition hover:opacity-80"
        >
          <AiOutlineMinus />
        </div>
        <div className="text-xl font-light text-neutral-500">{value}</div>
        <div
          onClick={onAdd}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-neutral-400 text-neutral-600 transition hover:opacity-80"
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  )
}
