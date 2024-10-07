
function Button({ children, ...props }) {
  return <button {...props} className="py-2 px-4 uppercase font-semibold rounded text-stone-900 bg-amber-400 hover:bg-amber-500">{children}</button>
}
export default Button;