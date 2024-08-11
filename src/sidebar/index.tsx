import "./styles.css";

const currentChats = [
    "Hover Effect Synonyms",
    "Move Next.js Build",
    "Packaging Extension Files",
    "Adding File Paths Manifest",
    "Next.js Static Export",
    "Export Component as HTML"
]

const yesterdayChat = [
    "Building Chrome Extensions NextJS",
    "Form Submission Code Explanation",
]

const lastWeekChat = [
    "Checking Firewall Issues",
    "Check EC2 Instance Status",
    "Create Firewall Rules Guide",
    "Firewall and Connectivity Check",
    "Using HTTP with AWS",
    "Convert Command for Windows",
    "MongoDB Projection Basics",
    "Const Declaration Error Fix",
    "Type Error Handling",
    "Toast Notification Issue",
    "Todo Validation Handling"
]

const lastMonth = [
    "TypeScript Data Assignment",
    "Checking Node.js Server",
    ".gitignore File Creation",
    "Server Listening Configuration",
    "Node.js Testing Guide",
    "Todo Model Example",
    "Understanding Sessions Basics",
    "Scroll Element to Top"
];

interface sidebarprops {
    setSidebarOpen: Function,
    sidebarOpen: boolean
}

function Sidebar({sidebarOpen, setSidebarOpen}:sidebarprops) {
    return (
        <nav className={`sidebar ${sidebarOpen? 'sidebar-open': 'sidebar-close'} flex h-screen w-full flex-col px-3`} aria-label="Chat history" >
            <div className="flex justify-between flex h-14 items-center">
                <span className="flex" data-state="closed">
                    <button aria-label="Close sidebar" onClick={()=> setSidebarOpen(!sidebarOpen)} className="h-10 rounded-lg px-2 text-token-text-secondary focus-visible:outline-0 hover:bg-token-sidebar-surface-secondary focus-visible:bg-token-sidebar-surface-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-xl-heavy">
                            <path fill="currentColor" fillRule="evenodd" d="M8.857 3h6.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961.058.708.058 1.582.058 2.666v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.1 21 16.227 21 15.143 21H8.857c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C1.5 15.6 1.5 14.727 1.5 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.23 3.544c.592-.302 1.233-.428 1.961-.487C6.9 3 7.773 3 8.857 3M6.354 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.05.617-.051 1.41-.051 2.546v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h.6V5h-.6c-1.137 0-1.929 0-2.546.051M11.5 5v14h3.6c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C17.029 5.001 16.236 5 15.1 5zM5 8.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </span>
                <span className="flex" data-state="closed"><button className="h-10 rounded-lg px-2 text-token-text-secondary focus-visible:outline-0 hover:bg-token-sidebar-surface-secondary focus-visible:bg-token-sidebar-surface-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="icon-xl-heavy"><path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path></svg></button></span>
            </div>
            <div dir="ltr" className="flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2 overflow-y-auto">
                <div className="mb-5 mt-2 bg-token-sidebar-surface-primary">
                    <div id="style-c99Zh" className="style-c99Zh"><a className="group flex h-10 items-center gap-2.5 rounded-lg bg-token-sidebar-surface-primary px-2 font-normal hover:bg-token-sidebar-surface-secondary" href="/">
                        <div className="h-6 w-6 flex-shrink-0">
                            <div className="gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full bg-token-main-surface-primary text-token-text-primary"><svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-2/3 w-2/3" role="img"><text x="-9999" y="-9999">ChatGPT</text>
                                <path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z" fill="currentColor"></path>
                            </svg></div>
                        </div>
                        <div className="grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary">ChatGPT</div>
                        <div className="flex gap-2"><span className="flex items-center" data-state="closed"><button className="invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="icon-md">
                            <path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path>
                        </svg></button></span></div>
                    </a></div>
                </div>
                <div>
                    <div><a href="/gpts"><button className="flex h-10 w-full items-center gap-2.5 rounded-lg px-2 text-token-text-primary hover:bg-token-sidebar-surface-secondary">
                        <div className="flex h-6 w-6 items-center justify-center text-token-text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-md">
                                <path fill="currentColor" fillRule="evenodd" d="M6.75 4.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M2.5 6.75a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M17.25 4.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M13 6.75a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M6.75 15a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M2.5 17.25a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M17.25 15a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M13 17.25a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0" clipRule="evenodd"></path>
                            </svg></div><span className="text-sm">Explore GPTs</span>
                    </button></a></div>
                </div>
                <div className="flex flex-col gap-2 pb-2 text-token-text-primary text-sm mt-5">
                    <div>
                        <div className="relative mt-5 first:mt-0 last:mb-5 empty:mt-0 empty:hidden style-DKXgk" id="style-DKXgk">
                            <div className="sticky top-0 z-20 bg-token-sidebar-surface-primary"><span className="flex h-9 items-center">
                                <h3 className="pb-2 pt-3 px-2 text-xs font-semibold text-ellipsis overflow-hidden break-all text-token-text-secondary">Today</h3>
                            </span></div>
                            <ol>
                                {currentChats.map(i => <li className="relative style-rVjSF" id="style-rVjSF" key={i}>
                                    <div className="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary"><a className="flex items-center gap-2 p-2" href="/c/fc1d923f-a4f1-4ebe-8404-3fe246bf1a37">
                                        <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto">{i}<div className="absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r from-token-sidebar-surface-primary from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary w-8 from-0% can-hover:group-hover:w-10 can-hover:group-hover:from-60%"></div>
                                        </div>
                                    </a>
                                        <div className="absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0 hidden can-hover:group-hover:flex"><span className="" data-state="closed"><button className="flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary" type="button" id="radix-:r2h:" aria-haspopup="menu" aria-expanded="false" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-md">
                                            <path fill="currentColor" fillRule="evenodd" d="M3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clipRule="evenodd"></path>
                                        </svg></button></span></div>
                                    </div>
                                </li>)}
                            </ol>
                        </div>
                        <div className="relative mt-5 first:mt-0 last:mb-5 empty:mt-0 empty:hidden style-FEhZX" id="style-FEhZX">
                            <div className="sticky top-0 z-20 bg-token-sidebar-surface-primary"><span className="flex h-9 items-center">
                                <h3 className="pb-2 pt-3 px-2 text-xs font-semibold text-ellipsis overflow-hidden break-all text-token-text-secondary">Yesterday</h3>
                            </span></div>
                            <ol>
                                {yesterdayChat.map(i => <li className="relative style-rVjSF" id="style-rVjSF" key={i}>
                                    <div className="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary"><a className="flex items-center gap-2 p-2" href="/c/fc1d923f-a4f1-4ebe-8404-3fe246bf1a37">
                                        <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto">{i}<div className="absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r from-token-sidebar-surface-primary from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary w-8 from-0% can-hover:group-hover:w-10 can-hover:group-hover:from-60%"></div>
                                        </div>
                                    </a>
                                        <div className="absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0 hidden can-hover:group-hover:flex"><span className="" data-state="closed"><button className="flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary" type="button" id="radix-:r2h:" aria-haspopup="menu" aria-expanded="false" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-md">
                                            <path fill="currentColor" fillRule="evenodd" d="M3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clipRule="evenodd"></path>
                                        </svg></button></span></div>
                                    </div>
                                </li>)}
                            </ol>
                        </div>
                        <div className="relative mt-5 first:mt-0 last:mb-5 empty:mt-0 empty:hidden style-N53Z8" id="style-N53Z8">
                            <div className="sticky top-0 z-20 bg-token-sidebar-surface-primary"><span className="flex h-9 items-center">
                                <h3 className="pb-2 pt-3 px-2 text-xs font-semibold text-ellipsis overflow-hidden break-all text-token-text-secondary">Previous 7 Days</h3>
                            </span></div>
                            <ol>
                                {lastWeekChat.map(i => <li className="relative style-rVjSF" id="style-rVjSF" key={i}>
                                    <div className="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary"><a className="flex items-center gap-2 p-2" href="/c/fc1d923f-a4f1-4ebe-8404-3fe246bf1a37">
                                        <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto">{i}<div className="absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r from-token-sidebar-surface-primary from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary w-8 from-0% can-hover:group-hover:w-10 can-hover:group-hover:from-60%"></div>
                                        </div>
                                    </a>
                                        <div className="absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0 hidden can-hover:group-hover:flex"><span className="" data-state="closed"><button className="flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary" type="button" id="radix-:r2h:" aria-haspopup="menu" aria-expanded="false" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-md">
                                            <path fill="currentColor" fillRule="evenodd" d="M3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clipRule="evenodd"></path>
                                        </svg></button></span></div>
                                    </div>
                                </li>)}
                            </ol>
                        </div>
                        <div className="relative mt-5 first:mt-0 last:mb-5 empty:mt-0 empty:hidden style-peZR1" id="style-peZR1">
                            <div className="sticky top-0 z-20 bg-token-sidebar-surface-primary"><span className="flex h-9 items-center">
                                <h3 className="pb-2 pt-3 px-2 text-xs font-semibold text-ellipsis overflow-hidden break-all text-token-text-secondary">Previous 30 Days</h3>
                            </span></div>
                            <ol>
                                {lastMonth.map(i => <li className="relative style-rVjSF" id="style-rVjSF" key={i}>
                                    <div className="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary"><a className="flex items-center gap-2 p-2" href="/c/fc1d923f-a4f1-4ebe-8404-3fe246bf1a37">
                                        <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto">{i}<div className="absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r from-token-sidebar-surface-primary from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary w-8 from-0% can-hover:group-hover:w-10 can-hover:group-hover:from-60%"></div>
                                        </div>
                                    </a>
                                        <div className="absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0 hidden can-hover:group-hover:flex"><span className="" data-state="closed"><button className="flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary" type="button" id="radix-:r2h:" aria-haspopup="menu" aria-expanded="false" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-md">
                                            <path fill="currentColor" fillRule="evenodd" d="M3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clipRule="evenodd"></path>
                                        </svg></button></span></div>
                                    </div>
                                </li>)}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-2 empty:hidden dark:border-white/20"><a className="group flex gap-2 p-2.5 text-sm cursor-pointer focus:ring-0 radix-disabled:pointer-events-none radix-disabled:opacity-50 group items-center hover:bg-token-sidebar-surface-secondary m-0 rounded-lg px-2"><span className="flex w-full flex-row flex-wrap-reverse justify-between">
                <div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm shrink-0">
                    <path fill="currentColor" d="M6.394 4.444c.188-.592 1.024-.592 1.212 0C8.4 8.9 9.1 9.6 13.556 10.394c.592.188.592 1.024 0 1.212C9.1 12.4 8.4 13.1 7.606 17.556c-.188.592-1.024.592-1.212 0C5.6 13.1 4.9 12.4.444 11.606c-.592-.188-.592-1.024 0-1.212C4.9 9.6 5.6 8.9 6.394 4.444m8.716 9.841a.41.41 0 0 1 .78 0c.51 2.865.96 3.315 3.825 3.826.38.12.38.658 0 .778-2.865.511-3.315.961-3.826 3.826a.408.408 0 0 1-.778 0c-.511-2.865-.961-3.315-3.826-3.826a.408.408 0 0 1 0-.778c2.865-.511 3.315-.961 3.826-3.826Zm2.457-12.968a.454.454 0 0 1 .866 0C19 4.5 19.5 5 22.683 5.567a.454.454 0 0 1 0 .866C19.5 7 19 7.5 18.433 10.683a.454.454 0 0 1-.866 0C17 7.5 16.5 7 13.317 6.433a.454.454 0 0 1 0-.866C16.5 5 17 4.5 17.567 1.317"></path>
                </svg></span>
                    <div className="flex flex-col"><span>Upgrade plan</span><span className="line-clamp-1 text-xs text-token-text-tertiary">Get GPT-4, DALL·E, and more</span></div>
                </div>
            </span></a>
                <div className="flex w-full items-center md:hidden">
                    <div className="max-w-[100%] grow">
                        <div className="group relative" data-headlessui-state=""><button className="flex w-full max-w-[100%] items-center gap-2 rounded-lg p-2 text-sm  hover:bg-token-sidebar-surface-secondary group-ui-open:bg-token-sidebar-surface-secondary" id="headlessui-menu-button-:r9:" type="button" aria-haspopup="true" aria-expanded="false" data-headlessui-state="">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center overflow-hidden rounded-full">
                                    <div className="relative flex"><img alt="User" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="rounded-sm style-42ym9" src="https://lh3.googleusercontent.com/a/AEdFTp4ow1w2gkeYQaVOEo0XLg75HIAOrJUsRICLd0PNjw=s96-c" id="style-42ym9" /></div>
                                </div>
                            </div>
                            <div className="relative -top-px grow -space-y-px truncate text-start text-token-text-primary">
                                <div dir="auto">Nikhil Patil</div>
                            </div>
                        </button></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar