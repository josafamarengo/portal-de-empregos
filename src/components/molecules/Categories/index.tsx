import Category from '@/components/atoms/Category'
import React from 'react'

function Categories() {
  return (
    <div className='min-h-[560px] py-20 flex flex-col items-center space-y-12'>
        <h2 className='text-4xl'>Veja vagas por área de atuação</h2>
        <ul className='grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full max-w-6xl mx-auto p-4'>
            <Category slug="remoto">Remoto</Category>
            <Category slug="CLT">CLT</Category>
            <Category slug="Javascript">Javascript</Category>
            <Category slug="Pleno">Pleno</Category>
            <Category slug="Sênior">Sênior</Category>
        </ul>
    </div>
  )
}

export default Categories