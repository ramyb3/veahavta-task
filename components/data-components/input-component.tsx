export default function Input({ name, ...props }: any) {
  return (
    <div>
      <div className="grid grid-rows-2 gap-3">
        <p className="pt-8">{props.text}</p>

        <input
          className="rounded-2xl px-2 shadow-4xl min-w-[240px] min-h-[60px]"
          name={name}
          type={props.type}
          onBlur={props.formik.handleBlur}
          onChange={props.formik.handleChange}
        />
      </div>

      {props.touch && props.error ? 
        <p className="text-sm text-red pt-2">{props.error}</p> : null
      }
    </div>
  )
}
