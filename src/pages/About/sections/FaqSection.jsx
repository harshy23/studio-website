import redFaqBox from '../../../logos/about_us_img/red_faq_box.png';
import blueFaqBox from '../../../logos/about_us_img/blue_faq_box.png';

export default function FaqSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-3 sm:pt-6 pb-6 sm:pb-16">

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
          text-[36px]
          sm:text-[46px]
          md:text-[54px]
          leading-none
          mb-4
          sm:mb-6
          md:mb-8
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
          flex
          flex-col
          items-center
          w-full
          px-3
          sm:px-4
          md:block
          md:max-w-[1050px]
          md:h-[660px]
          md:mx-auto
          md:px-0
        "
      >

        {/* =========================
            BLUE BOX
            LEFT / BACK
        ========================== */}
        <div
          className="
            relative
            w-[92%]
            max-w-[340px]
            h-[335px]
            sm:h-[370px]
            z-10
            rotate-[0deg]
            md:absolute
            md:left-[10%]
            md:top-[20px]
            md:w-[46%]
            md:h-[460px]
            md:max-w-none
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
              left-[14%]
              top-[19%]
              right-[12%]
              text-white
              font-fredoka
              rotate-0
              md:left-[18%]
              md:top-[23%]
              md:rotate-[-10.5deg]
            "
          >

            {/* FAQ 1 */}
            <div className="mb-4 sm:mb-5 md:mb-7">
              <h3
                className="
                  text-[12px]
                  sm:text-[14px]
                  md:text-[17px]
                  font-bold
                  leading-[1.25]
                  mb-1.5
                  md:mb-2
                "
              >
                Q. Can you create animated commercials
                for me?
              </h3>

              <p
                className="
                  text-[10.5px]
                  sm:text-[12px]
                  md:text-[15px]
                  font-normal
                  leading-[1.35]
                  md:leading-[1.4]
                "
              >
                A. Yes. Just drop a word at{' '}
                <a
                  href="mailto:Hello@studiobiskoot.com"
                  className="hover:opacity-80 transition-opacity underline md:no-underline"
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
                  text-[12px]
                  sm:text-[14px]
                  md:text-[17px]
                  font-bold
                  leading-[1.25]
                  mb-1.5
                  md:mb-2
                "
              >
                Q. Do you do live-action shoots,
                3D animation and VFX?
              </h3>

              <p
                className="
                  text-[10.5px]
                  sm:text-[12px]
                  md:text-[15px]
                  font-normal
                  leading-[1.35]
                  md:leading-[1.4]
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
            relative
            w-[92%]
            max-w-[340px]
            h-[360px]
            sm:h-[400px]
            z-20
            -mt-12
            sm:-mt-14
            rotate-[0deg]
            md:mt-0
            md:absolute
            md:left-[49%]
            md:top-[170px]
            md:w-[47%]
            md:h-[460px]
            md:max-w-none
            md:rotate-[16deg]
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
              left-[14%]
              top-[17%]
              right-[12%]
              text-white
              font-fredoka
              rotate-0
              md:left-[20%]
              md:top-[19%]
              md:rotate-[-7deg]
            "
          >

            {/* FAQ 3 */}
            <div className="mb-3.5 sm:mb-5 md:mb-7">
              <h3
                className="
                  text-[12px]
                  sm:text-[14px]
                  md:text-[17px]
                  font-bold
                  leading-[1.25]
                  mb-1.5
                  md:mb-2
                "
              >
                Q. Are you hiring full time positions?
              </h3>

              <p
                className="
                  text-[10px]
                  sm:text-[12px]
                  md:text-[15px]
                  font-normal
                  leading-[1.35]
                  md:leading-[1.4]
                "
              >
                A. We're not hiring at the moment, but
                we're always looking for good artists to
                collaborate with on a freelance/project
                basis. Send us your portfolio/reel at{' '}
                <a
                  href="mailto:hello@studiobiskoot.com"
                  className="hover:opacity-80 transition-opacity underline md:no-underline"
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
                  text-[12px]
                  sm:text-[14px]
                  md:text-[17px]
                  font-bold
                  leading-[1.25]
                  mb-1.5
                  md:mb-2
                "
              >
                Q. Do you offer internships and grad
                projects?
              </h3>

              <p
                className="
                  text-[10px]
                  sm:text-[12px]
                  md:text-[15px]
                  font-normal
                  leading-[1.35]
                  md:leading-[1.4]
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