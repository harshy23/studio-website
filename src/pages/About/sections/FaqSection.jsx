import redFaqBox from '../../../logos/about_us_img/red_faq_box.png';
import blueFaqBox from '../../../logos/about_us_img/blue_faq_box.png';

export default function FaqSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-5 sm:pt-6 pb-12 sm:pb-16">

      {/* =========================
          FAQ HEADING
      ========================== */}
      <h2
        className="
          font-GochiHand
          text-center
          font-bold
          tracking-wide
          text-[#302C2D]
          text-[42px]
          sm:text-[48px]
          md:text-[54px]
          leading-none
          mb-6
          sm:mb-8
        "
      >
        FAQ
      </h2>


      {/* =========================
          FAQ ARTWORK
      ========================== */}
      <div
        className="
          relative
          w-full
          max-w-[1050px]
          h-[660px]
          mx-auto
        "
      >

        {/* =========================
            BLUE BOX
            LEFT / BACK
        ========================== */}
        <div
          className="
            absolute
            left-[10%]
            top-[20px]
            w-[46%]
            h-[460px]
            z-10
            rotate-[0deg]
          "
        >
          <img
            src={blueFaqBox}
            alt=""
            draggable={false}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-fill
              pointer-events-none
              select-none
            "
          />

          {/* BLUE TEXT */}
          <div
            className="
              absolute
              left-[18%]
              top-[23%]
              right-[12%]
              text-white
              font-fredoka
              rotate-[-10.5deg]
            "
          >

            {/* FAQ 1 */}
            <div className="mb-7">
              <h3
                className="
                  text-[14px]
                  sm:text-[15px]
                  md:text-[17px]
                  font-bold
                  leading-[1.2]
                  mb-2
                "
              >
                Q. Can you create animated commercials
                for me?
              </h3>

              <p
                className="
                  text-[13px]
                  sm:text-[14px]
                  md:text-[15px]
                  font-normal
                  leading-[1.4]
                "
              >
                A. Yes. Just drop a word at{' '}
                <a
                  href="mailto:Hello@studiobiskoot.com"
                  className="hover:opacity-80 transition-opacity"
                >
                  Hello@studiobiskoot.com
                </a>{' '}
                or call us on the given contact no.
              </p>
            </div>


            {/* FAQ 2 */}
            <div>
              <h3
                className="
                  text-[14px]
                  sm:text-[15px]
                  md:text-[17px]
                  font-bold
                  leading-[1.2]
                  mb-2
                "
              >
                Q. Do you do live-action shoots,
                3D animation and VFX?
              </h3>

              <p
                className="
                  text-[13px]
                  sm:text-[14px]
                  md:text-[15px]
                  font-normal
                  leading-[1.4]
                "
              >
                A. No. We specialize in 2D
                character and fx animation.
              </p>
            </div>

          </div>
        </div>


        {/* =========================
            RED BOX
            RIGHT / FRONT
        ========================== */}
        <div
          className="
            absolute
            left-[49%]
            top-[170px]
            w-[47%]
            h-[460px]
            z-20
            rotate-[16deg]
          "
        >
          <img
            src={redFaqBox}
            alt=""
            draggable={false}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-fill
              pointer-events-none
              select-none
            "
          />

          {/* RED TEXT */}
          <div
            className="
              absolute
              left-[20%]
              top-[19%]
              right-[12%]
              text-white
              font-fredoka
              rotate-[-7deg]
            "
          >

            {/* FAQ 3 */}
            <div className="mb-7">
              <h3
                className="
                  text-[14px]
                  sm:text-[15px]
                  md:text-[17px]
                  font-bold
                  leading-[1.2]
                  mb-2
                "
              >
                Q. Are you hiring full time positions?
              </h3>

              <p
                className="
                  text-[13px]
                  sm:text-[14px]
                  md:text-[15px]
                  font-normal
                  leading-[1.4]
                "
              >
                A. We're not hiring at the moment, but
                we're always looking for good artists to
                collaborate with on a freelance/project
                basis. Send us your portfolio/reel at{' '}
                <a
                  href="mailto:hello@studiobiskoot.com"
                  className="hover:opacity-80 transition-opacity"
                >
                  hello@studiobiskoot.com
                </a>{' '}
                or fill this form so that we can save
                your contact.
              </p>
            </div>


            {/* FAQ 4 */}
            <div>
              <h3
                className="
                  text-[14px]
                  sm:text-[15px]
                  md:text-[17px]
                  font-bold
                  leading-[1.2]
                  mb-2
                "
              >
                Q. Do you offer internships and grad
                projects?
              </h3>

              <p
                className="
                  text-[13px]
                  sm:text-[14px]
                  md:text-[15px]
                  font-normal
                  leading-[1.4]
                "
              >
                A. No, we are not offering any internships
                at the studio currently.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}