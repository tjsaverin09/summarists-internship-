export default function ProgressBar() {
    return(
        <div className="flex items-center justify-center gap-5">
      <span style={{color: 'white'}}>00:00</span>
      <input className="max-w-[80%] bg-gray-300" type="range" />
      <span style={{color: 'white'}}>03:34</span>
    </div>
    )
}