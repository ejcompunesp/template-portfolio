type ButtonProps = {
  text: string
}

export const Button = ({ text }: ButtonProps) => (

  <button type="button" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 focus:ring-gray-900 bg-black hover:bg-gray-900">{text}</button>
  
)

