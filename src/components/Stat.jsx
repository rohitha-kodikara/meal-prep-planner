const Stat = ({ statTitle, values, suffix, children, bgColor }) => {
  return (
    <div className={`rounded-2xl ${bgColor} p-5 shadow-sm`}>
      <p className="text-sm text-gray-500">{statTitle}</p>

      <p className="mt-1 text-2xl font-bold text-gray-900">
        {values}
        {suffix && (
          <span className="text-base font-medium text-gray-500">
            {suffix}
          </span>
        )}
      </p>

      {children}
    </div>
  )
}

export default Stat