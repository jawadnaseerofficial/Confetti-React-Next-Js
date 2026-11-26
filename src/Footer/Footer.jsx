import Image from "next/image";

const footerLink = "text-[13px] text-neutral-300 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="mt-24 bg-black overflow-hidden">
      <div className="rounded-t-[60px] p-[1px] bg-[conic-gradient(from_270deg_at_50%_100%,#000000_0deg,#000000_8deg,#2d9cdb_22deg,#7f7aff_60deg,#ff9900_90deg,#e6396b_118deg,#c026d3_158deg,#000000_172deg,#000000_360deg)]">
        <div className="rounded-t-[58px] bg-black">
          <div className="mx-auto max-w-5xl px-6 pt-16 pb-10">

            <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">

              <div>
                <h3 className="text-sm font-bold text-white">Join for free career tips!</h3>

                <div className="mt-5 flex items-center gap-3">
                  <input
                    type="email"
                    aria-label="Email address"
                    placeholder="Email@example.com"
                    className="h-8 w-40 rounded-md border border-white/15 bg-[#161616] px-3 text-xs text-white outline-none placeholder:text-neutral-500 focus:border-white/30"
                  />
                  <button
                    type="button"
                    className="h-8 rounded-md bg-[#840da7] px-4 text-[11px] text-white transition-colors hover:bg-[#640d7e] border border-transparent hover:border-[#922ab1]"
                  >
                    Sign up
                  </button>
                </div>

                <div className="mt-8 flex items-center gap-6">
                  <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-70">
                    <Image
                      src="/images/instagram.png"
                      alt="Instagram"
                      width={18}
                      height={18}
                      className="object-contain brightness-0 invert"
                    />
                  </a>
                  <a href="#" aria-label="Twitter" className="transition-opacity hover:opacity-70">
                    <Image
                      src="/images/twitter.png"
                      alt="Twitter"
                      width={18}
                      height={18}
                      className="object-contain brightness-0 invert"
                    />
                  </a>
                  <a href="#" aria-label="Email" className="transition-opacity hover:opacity-70">
                    <Image
                      src="/images/mail.png"
                      alt="Email"
                      width={18}
                      height={18}
                      className="object-contain brightness-0 invert"
                    />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-3">
                <div>
                  <h4 className="text-[12px] font-bold text-white">Company</h4>
                  <ul className="mt-4 space-y-0.5">
                    <li><a href="#" className={`${footerLink}`}>Product</a></li>
                    <li><a href="#" className={`${footerLink}`}>Features</a></li>
                    <li><a href="#" className={`${footerLink}`}>Power</a></li>
                    <li><a href="#" className={`${footerLink}`}>Experience</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[12px] font-bold text-white">Social media</h4>
                  <ul className="mt-4 space-y-0.5">
                    <li><a href="#" className={`${footerLink}`}>Instagram</a></li>
                    <li><a href="#" className={`${footerLink}`}>Facebook</a></li>
                    <li><a href="#" className={`${footerLink}`}>Linkedin</a></li>
                    <li><a href="#" className={`${footerLink}`}>Twitter</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[12px] font-bold text-white">Webflow stuff</h4>
                  <ul className="mt-4 space-y-0.5">
                    <li><a href="#" className={`${footerLink}`}>Style Guide</a></li>
                    <li><a href="#" className={`${footerLink}`}>Licensing</a></li>
                    <li><a href="#" className={`${footerLink}`}>Instructions</a></li>
                    <li><a href="#" className={`${footerLink}`}>Change Log</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-24 flex flex-col gap-3 border-t border-white/18 pt-8 text-[11px] font-medium tracking-wide text-white sm:flex-row sm:items-center sm:justify-between">
              <p>
                CREATED BY{" "}
                <a href="#" className="underline underline hover:text-neutral-300">
                  OVERSIGHT
                </a>
              </p>
              <p>
                POWERED BY{" "}
                <a href="#" className="underline underline hover:text-neutral-300">
                  WEBFLOW
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
