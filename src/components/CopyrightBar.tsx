export function CopyrightBar() {
  return (
    <div className="bg-[#F6FCFF] border-t border-[#051A24]/4 py-4 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-body text-xs text-[#273C46]/50">
          © {new Date().getFullYear()} HoyoMax Studio. All rights reserved.
        </p>
        <p className="font-body text-xs text-[#273C46]/40">
          Built with precision in Birmingham, UK
        </p>
      </div>
    </div>
  )
}
