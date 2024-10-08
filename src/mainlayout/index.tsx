import "./styles.css";
interface mainProps{
  setSidebarOpen: Function,
  sidebarOpen: boolean,
  screenWidth: number
}
function Main({setSidebarOpen, sidebarOpen, screenWidth}: mainProps) {
  return (
    <main className={`relative ${sidebarOpen && screenWidth > 900? "main-sidebar_open": "main-sidebar_close"} h-screen w-full flex-1 overflow-auto transition-width`}>
      <div
        role="presentation"
        className="flex h-full flex-col focus-visible:outline-0 snipcss0-0-0-1"
      >
        <div className="flex-1 overflow-hidden snipcss0-1-1-2">
          <div className="relative h-full snipcss0-2-2-3">
            <div className="absolute left-0 w-full right-0 snipcss0-3-3-4">
              <div className="sticky top-0 p-3 mb-1.5 flex items-center w-full justify-between z-10 h-14 font-semibold bg-token-main-surface-primary">
                {!sidebarOpen && <button
                  type="button"
                  className="sidebar-button inline-flex items-center justify-center rounded-md px-3 hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50"
                  onClick={()=>setSidebarOpen(!sidebarOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="icon-lg mx-2.5 text-token-text-secondary"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>}
                <div className="flex items-center gap-0 overflow-hidden">
                  <div
                    id="radix-:r9:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                    className="group flex cursor-pointer items-center gap-1 rounded-lg py-1.5 px-3 text-lg font-semibold hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary text-token-text-secondary overflow-hidden whitespace-nowrap snipcss0-6-7-8"
                  >
                    <div className="text-token-text-secondary snipcss0-7-8-9">
                      ChatGPT{" "}
                      <span className="text-token-text-secondary snipcss0-8-9-10"></span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="icon-md text-token-text-tertiary snipcss0-7-8-11"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex gap-2 pr-1">
                  <button
                    data-testid="profile-button"
                    className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary focus-visible:outline-0 snipcss0-6-12-13"
                    type="button"
                    id="radix-:r6:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <div className="flex items-center justify-center overflow-hidden rounded-full snipcss0-7-13-14">
                      <div className="relative flex snipcss0-8-14-15">
                        <img
                          alt="User"
                          loading="lazy"
                          width="32"
                          height="32"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-sm snipcss0-9-15-16 style-hR2kT"
                          src="https://lh3.googleusercontent.com/a/AEdFTp4ow1w2gkeYQaVOEo0XLg75HIAOrJUsRICLd0PNjw=s96-c"
                          id="style-hR2kT"
                        />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col items-center justify-center text-token-text-primary">
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 "
                role="img"
              >
                <text x="-9999" y="-9999">
                  ChatGPT
                </text>
                <path
                  d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div style={{ opacity: "1" }}>
                <div className="mx-3 mt-12 flex max-w-3xl flex-wrap items-stretch justify-center gap-4">
                  <div className="flex max-w-3xl flex-wrap items-stretch justify-center gap-4">
                    <button className="relative text-start flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="icon-md"
                        style={{ color: "rgb(203, 139, 208)" }}
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 18V7h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2"
                        ></path>
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4"
                        ></path>
                      </svg>
                      <div className="line-clamp-3 max-w-full text-balance text-gray-600 dark:text-gray-500 break-word">
                        Pick outfit to look good on camera
                      </div>
                    </button>
                    <button className="relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="24"
                        fill="none"
                        viewBox="0 0 26 24"
                        className="icon-md"
                        style={{ color: "rgb(118, 208, 235)" }}
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M13.454 4.105a1 1 0 0 0-.909 0L2.987 8.982 2.077 7.2l9.56-4.877a3 3 0 0 1 2.726 0l9.56 4.877A1.98 1.98 0 0 1 25 9.22V15a1 1 0 1 1-2 0v-3.784l-2.033.995v4.094a3 3 0 0 1-1.578 2.642l-4.967 2.673a3 3 0 0 1-2.844 0l-4.967-2.673a3 3 0 0 1-1.578-2.642v-4.094l-2.927-1.433C.626 10.053.61 7.949 2.077 7.2l.91 1.782 9.573 4.689a1 1 0 0 0 .88 0L23 8.989v-.014zm-6.42 9.086v3.114a1 1 0 0 0 .525.88l4.967 2.674a1 1 0 0 0 .948 0l4.967-2.673a1 1 0 0 0 .526-.88V13.19l-4.647 2.276a3 3 0 0 1-2.64 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="line-clamp-3 max-w-full text-balance text-gray-600 dark:text-gray-500 break-word">
                        Quiz me on world capitals
                      </div>
                    </button>
                  </div>
                  <div className="sm-hidden flex max-w-3xl flex-wrap items-stretch justify-center gap-4">
                    <button className="relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="icon-md"
                        style={{ color: "rgb(226, 197, 65)" }}
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M12 3C8.415 3 5.5 5.923 5.5 9.538A6.54 6.54 0 0 0 8.425 15h7.15A6.54 6.54 0 0 0 18.5 9.538C18.5 5.923 15.585 3 12 3m2.865 14h-5.73v1h5.73zm-1.133 3h-3.464a2 2 0 0 0 3.464 0m-5.606 0a4.002 4.002 0 0 0 7.748 0 1 1 0 0 0 .991-1v-2.46A8.54 8.54 0 0 0 20.5 9.539C20.5 4.828 16.7 1 12 1S3.5 4.828 3.5 9.538a8.54 8.54 0 0 0 3.635 7.003V19a1 1 0 0 0 .991 1"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="line-clamp-3 max-w-full text-balance text-gray-600 dark:text-gray-500 break-word">
                        What to do with kids' art
                      </div>
                    </button>
                    <button className="relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="icon-md"
                        style={{ color: "rgb(237, 98, 98)" }}
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm1.293 4.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L8.586 12l-1.293-1.293a1 1 0 0 1 0-1.414M12 14a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="line-clamp-3 max-w-full text-balance text-gray-600 dark:text-gray-500 break-word">
                        Make me a personal webpage
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent w-full">
          <div className="text-base px-3 md:px-4 m-auto md:px-5 lg:px-1 xl:px-5">
            <div className="mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]">
              <form
                className="w-full"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:rao:"
                data-state="closed"
              >
                <div className="relative flex h-full max-w-full flex-1 flex-col">
                  <div className="absolute bottom-full left-0 right-0 z-20">
                    <div className="relative h-full w-full">
                      <div className="flex flex-col gap-3.5 pb-3.5 pt-2"></div>
                    </div>
                  </div>
                  <div className="flex w-full items-center">
                    <div className="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#f4f4f4] dark:bg-token-main-surface-secondary">
                      <div className="flex items-end gap-1.5 md:gap-2">
                        <div>
                          <div className="flex flex-col">
                            <input
                              type="file"
                              className="hidden"
                              style={{ display: "none" }}
                            />
                            <button
                              type="button"
                              id="radix-:rau:"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              data-state="closed"
                              className="text-token-text-primary border border-transparent inline-flex items-center justify-center gap-1 rounded-lg text-sm dark:transparent dark:bg-transparent leading-none outline-none cursor-pointer hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-state-active:text-token-text-secondary radix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent m-0 h-0 w-0 border-none bg-transparent p-0"
                            ></button>
                            <button
                              className="flex items-center justify-center h-8 w-8 rounded-full text-token-text-primary focus-visible:outline-black dark:text-white dark:focus-visible:outline-white mb-1 ml-1.5"
                              aria-disabled="false"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  fill-rule="evenodd"
                                  d="M9 7a5 5 0 0 1 10 0v8a7 7 0 1 1-14 0V9a1 1 0 0 1 2 0v6a5 5 0 0 0 10 0V7a3 3 0 1 0-6 0v8a1 1 0 1 0 2 0V9a1 1 0 1 1 2 0v6a3 3 0 1 1-6 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                            <div
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:rb0:"
                              data-state="closed"
                            ></div>
                          </div>
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col">
                          <textarea
                            id="prompt-textarea"
                            data-id="root"
                            dir="auto"
                            placeholder="Message ChatGPT"
                            className="m-0 resize-none border-0 bg-transparent px-0 text-token-text-primary focus:ring-0 focus-visible:ring-0 max-h-[25dvh] max-h-52"
                            style={{ height: "40px", overflowY: "hidden" }}
                          ></textarea>
                        </div>
                        <button
                          data-testid="send-button"
                          className="mb-1 me-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:bg-[#D7D7D7] disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="none"
                            viewBox="0 0 32 32"
                            className="icon-2xl"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="relative px-2 py-2 flex justify-center jus text-xs text-token-text-secondary md:px-[60px]">
            <span>ChatGPT can make mistakes. Check important info.</span>
          </div>
        </div>
      </div>
      <div className="group absolute bottom-2 end-2 z-10 hidden gap-1 md:flex lg:bottom-3 lg:end-3">
        <button
          className="flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary"
          type="button"
          id="radix-:r3:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          ?
        </button>
      </div>
    </main>
  );
}

export default Main;
