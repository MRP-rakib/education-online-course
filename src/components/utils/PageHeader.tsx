
 interface PropsType{
    path:string
 }
function PageHeader({path}:PropsType) {
  return (
    <section className=' relative bg-[url("/banner.jpg")] bg-no-repeat bg-center bg-cover after:absolute after:inset-0 after:bg-[rgba(19,57,70,0.8)]'>
      <div className='py-15 relative z-50 flex flex-col gap-2 items-center justify-center'>
        <h4 className='text-white text-3xl font-bold capitalize'>{path}</h4>
        <p className='text-white capitalize text-base'><span className='text-blue-600'>Home &gt;&gt; </span>{path}</p>
      </div>
    </section>
  )
}

export default PageHeader