// https://cdn-icons-png.flaticon.com/512/94/94107.png

/** @type {import("../props").HeaderProps} */
export const HEADER_TEST_PROPS = {
  searchUrl: "https://search.asu.edu/search",
  // searchUrl: `${new URL(window.location.href).origin}/search`,
  universalNavbar: {
    hideMobile: false,
    searchUrlQueryParam: "search_query",
    searchUrlQueryParamValueFormat: "application/x-www-form-urlencoded",
  },
  topBanner: {
    // This is disabled now
    html: `<div id="my-ad-portal-exit"></div>`,
    height: "131px",
    heightAbove: "131px",
    heightBelow: "115px",
    maxWidthBreakpoint: "992px",
    contentStyles: {},
  },
  scrollTarget: null,
  style: {
    position: "static",
  },
  baseUrl: "https://web-sda.ddev.site:8443/",
  title: "Sun Devils",
  parentOrg: "",
  parentOrgUrl: "",
  expandOnHover: false,
  loginLink: "/caslogin",
  logoutLink: "/caslogout",
  loggedIn: true,
  userName: "You are logged in",
  isSponsor: true,
  sponsorLogo: {
    brandLink: "https://upload.wikimedia.org/",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg",
    alt: "Test",
    mobileSrc:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg",
  },
  logo: {
    alt: "Arizona State University",
    title: "ASU home page",
    brandLink: "https://www.asu.edu",
    src: "https://thesundevils.com/images/responsive/primary_logo.svg",
    mobileSrc: "https://thesundevils.com/images/responsive/primary_logo.svg",
    width: "107",
    height: "74",
    mobileWidth: "67",
    mobileHeight: "47",
  },
  site: "web-sda.ddev.site",
  officialSiteHref: "#",
  officialSite: {
    href: "#",
    hrefStyle: {
      // color: "black",
    },
    hrefText: "Arizona State University",
    text: "The official athletics site of",
  },
  mobile: {
    title: "Sun Devil Athletics",
  },

  navTree: [
    {
        href: "/",
        text: "Home",
        icon: "",
        items: "",
        buttons: "",
        extra_section: "",
        is_sports_type: false,
        mobile: {
            hide: false
        },
        device: "",
        type: "icon-home",
        "class": "home"
    },
    {
        href: "/sports",
        text: "Men's Sports",
        icon: "",
        items: [
            [
                {
                    href: "/sports/mens/baseball",
                    text: "Baseball",
                    device: "desktop_only",
                    icon: {
                        "icon_name": "baseball-bat-ball",
                        "style": "fas",
                        "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:3:\"fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "/tickets/baseball",
                            text: "Tickets",
                            device: "desktop_only"
                        },
                        {
                            href: "https://thesundevils.com/sports/baseball/schedule",
                            text: "Schedule",
                            device: "desktop_only"
                        },
                        {
                            href: "https://thesundevils.com/sports/baseball/roster",
                            text: "Roster",
                            device: "desktop_only"
                        },
                        {
                            href: "https://thesundevils.com/sports/baseball/stats/",
                            text: "Stats",
                            device: "desktop_only"
                        },
                        {
                            href: "/about/news?sport=baseballview",
                            text: "News",
                            device: "desktop_only"
                        }
                    ]
                },
                {
                    href: "/sports/mens/basketball",
                    text: "Basketball",
                    device: "mobile_only",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/basketball_2.svg",
                        "svg_icon_name": "Basketball hoop"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "/tickets/mens-basketball",
                            text: "Tickets",
                            device: "mobile_only"
                        },
                        {
                            href: "https://thesundevils.com/sports/mens-basketball/schedule",
                            text: "Schedule",
                            device: "mobile_only"
                        },
                        {
                            href: "https://thesundevils.com/sports/mens-basketball/roster",
                            text: "Roster",
                            device: "mobile_only"
                        },
                        {
                            href: "https://thesundevils.com/sports/mens-basketball/stats",
                            text: "Stats",
                            device: "mobile_only"
                        },
                        {
                            href: "/about/news?sport=mens-basketballview",
                            text: "News",
                            device: "mobile_only"
                        }
                    ]
                },
                {
                    href: "/sports/cross-country",
                    text: "Cross Country",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "icon_name": "person-running",
                        "style": "fa-fa-fas",
                        "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:9:\"fa-fa-fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "https://thesundevils.com/sports/cross-country/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/cross-country/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/2018/11/20/past-results.aspx",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=cross-countryview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/mens/football",
                    text: "Football",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "icon_name": "football",
                        "style": "fa-fas",
                        "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:6:\"fa-fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "/tickets/football",
                            text: "Tickets",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/football/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/football/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/football/stats/2024",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=footballview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/mens/golf",
                    text: "Golf",
                    device: "mobile_only",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/golf_0.svg",
                        "svg_icon_name": "Golf club"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "https://thesundevils.com/sports/mens-golf/schedule",
                            text: "Schedule",
                            device: "mobile_only"
                        },
                        {
                            href: "https://thesundevils.com/sports/mens-golf/roster",
                            text: "Roster",
                            device: "mobile_only"
                        },
                        {
                            href: "https://thesundevils.com/sports/mens-golf/results",
                            text: "Stats",
                            device: "mobile_only"
                        },
                        {
                            href: "/about/news?sport=mens-golfview",
                            text: "News",
                            device: "mobile_only"
                        }
                    ]
                },
                {
                    href: "/sports/mens/ice-hockey",
                    text: "Ice Hockey",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/ice-hockey_0.svg",
                        "svg_icon_name": "Hockey puck and stick"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "/tickets/ice-hockey",
                            text: "Tickets",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/mens-ice-hockey/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/mens-ice-hockey/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/mens-ice-hockey/stats",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=ice-hockeyview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/mens/swimming-diving",
                    text: "Swimming and Diving",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "icon_name": "person-swimming",
                        "style": "fa-fa-fa-fas",
                        "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:12:\"fa-fa-fa-fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "https://thesundevils.com/sports/mens-swimming-and-diving/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/mens-swimming-and-diving/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/mens-swimming-and-diving/results",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=mens-swimming-divingview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/mens/tennis",
                    text: "Tennis",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/tennis.svg",
                        "svg_icon_name": "Tennis racket"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "https://thesundevils.com/sports/mens-tennis/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/mens-tennis/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/mens-tennis/stats/",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=mens-tennisview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/track-field",
                    text: "Track and Field",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/track-and-field.svg",
                        "svg_icon_name": "Jersey"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "https://thesundevils.com/sports/track-and-field/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/track-and-field/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/track-and-field/results",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=track-fieldview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/mens/wrestling",
                    text: "Wrestling",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/wrestling.svg",
                        "svg_icon_name": "Two people grappling"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "/tickets/wrestling",
                            text: "Tickets",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/wrestling/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/wrestling/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/wrestling/results",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=wrestlingview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                }
            ]
        ],
        buttons: [
            {
                href: "/tickets",
                text: "Buy tickets",
                "color": "gold",
                icon: {
                    "icon_name": "ticket",
                    "style": "fa-fas",
                    "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:6:\"fa-fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                },
                device: "both_desktop_and_mobile"
            }
        ],
        extra_section: [
            {
                url: "/sites/default/files/2024-06/ticketmaster-5-logo-black-and-white.png",
                "image_width": "175",
                type: "image_only",
                href: "https://am.ticketmaster.com/sundevils/buy?wt_mc_id=NCAA_ASU_DD_TAB&utm_source=sundevils.com&utm_medium=client&utm_campaign=NCAA_ASU&utm_content=DD_TAB",
                text: "Ticketmaster",
                alt: "Sponsor Image",
                device: "both_desktop_and_mobile"
            }
        ],
        is_sports_type: true,
        mobile: "",
        device: "both_desktop_and_mobile"
    },
    {
        href: "/sports",
        text: "Women's Sports",
        icon: "",
        items: [
            [
                {
                    href: "/sports/womens/basketball",
                    text: "Basketball",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/basketball_4.svg",
                        "svg_icon_name": "Basketball hoop"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "/tickets/womens-basketball",
                            text: "Tickets",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-basketball/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-basketball/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-basketball/stats/",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=womens-basketballview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/womens/beach-volleyball",
                    text: "Beach Volleyball",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/beach-volleyball_0.svg",
                        "svg_icon_name": "Volleyball above water"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "https://thesundevils.com/sports/wbvball/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/wbvball/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/wbvball/results",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=beach-volleyballview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/cross-country",
                    text: "Cross Country",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "icon_name": "person-running",
                        "style": "fa-fa-fas",
                        "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:9:\"fa-fa-fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "https://thesundevils.com/sports/cross-country/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/cross-country/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/2018/11/20/past-results.aspx",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=cross-countryview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/womens/golf",
                    text: "Golf",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/golf_1.svg",
                        "svg_icon_name": "Golf club"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "https://thesundevils.com/sports/womens-golf/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-golf/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/2024/9/16/2024-25-sun-devil-womens-golf-statistics-homepage.aspx",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=womens-golfview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/womens/gymnastics",
                    text: "Gymnastics",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/gymnastics.svg",
                        "svg_icon_name": "Person twirling"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "/tickets/gymnastics",
                            text: "Tickets",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-gymnastics/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-gymnastics/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-gymnastics/results",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=gymnasticsview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/womens/lacrosse",
                    text: "Lacrosse",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/lacrosse_1.svg",
                        "svg_icon_name": "Lacrosse stick and ball"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "/tickets/lacrosse",
                            text: "Tickets",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-lacrosse/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-lacrosse/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-lacrosse/stats",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=lacrosseview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/womens/soccer",
                    text: "Soccer",
                    device: "mobile_only",
                    icon: {
                        "icon_name": "futbol",
                        "style": "fas",
                        "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:3:\"fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "/tickets/soccer",
                            text: "Tickets",
                            device: "mobile_only"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-soccer/schedule",
                            text: "Schedule",
                            device: "mobile_only"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-soccer/roster",
                            text: "Roster",
                            device: "mobile_only"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-soccer/stats",
                            text: "Stats",
                            device: "mobile_only"
                        },
                        {
                            href: "/about/news?sport=soccerview",
                            text: "News",
                            device: "mobile_only"
                        }
                    ]
                },
                {
                    href: "/sports/womens/softball",
                    text: "Softball",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "icon_name": "baseball",
                        "style": "fa-fa-fa-fa-fa-fas",
                        "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:18:\"fa-fa-fa-fa-fa-fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "/tickets/softball",
                            text: "Tickets",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/softball/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/softball/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/softball/stats",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=softballview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/womens/swimming-diving",
                    text: "Swimming and Diving",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "icon_name": "person-swimming",
                        "style": "fa-fa-fas",
                        "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:9:\"fa-fa-fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "https://thesundevils.com/sports/womens-swimming-and-diving/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-swimming-and-diving/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-swimming-and-diving/results",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=womens-swimming-divingview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/womens/tennis",
                    text: "Tennis",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/tennis_2.svg",
                        "svg_icon_name": "Tennis racket"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "https://thesundevils.com/sports/womens-tennis/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-tennis/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-tennis/stats",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=womens-tennisview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/track-field",
                    text: "Track and Field",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/track-and-field_2.svg",
                        "svg_icon_name": "Jersey"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "https://thesundevils.com/sports/track-and-field/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/track-and-field/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/track-and-field/results",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=track-fieldview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/womens/triathalon",
                    text: "Triathlon",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "icon_name": "circle-nodes",
                        "style": "fa-fa-fa-fa-fa-fas",
                        "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:18:\"fa-fa-fa-fa-fa-fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "https://thesundevils.com/sports/triathlon/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/triathlon/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=triathlonview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/womens/volleyball",
                    text: "Volleyball",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "icon_name": "volleyball",
                        "style": "fa-fa-fa-fa-fa-fas",
                        "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:18:\"fa-fa-fa-fa-fa-fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "/tickets/volleyball",
                            text: "Tickets",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-volleyball/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-volleyball/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-volleyball/stats",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=volleyballview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                },
                {
                    href: "/sports/womens/water-polo",
                    text: "Water Polo",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/water-polo.svg",
                        "svg_icon_name": "Person in water hitting ball"
                    },
                    type: null,
                    extra_links: [
                        {
                            href: "https://thesundevils.com/sports/womens-water-polo/schedule",
                            text: "Schedule",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-water-polo/roster",
                            text: "Roster",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "https://thesundevils.com/sports/womens-water-polo/stats",
                            text: "Stats",
                            device: "both_desktop_and_mobile"
                        },
                        {
                            href: "/about/news?sport=water-poloview",
                            text: "News",
                            device: "both_desktop_and_mobile"
                        }
                    ]
                }
            ]
        ],
        buttons: [
            {
                href: "/tickets",
                text: "Buy tickets",
                "color": "gold",
                icon: {
                    "icon_name": "ticket",
                    "style": "fa-fas",
                    "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:6:\"fa-fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                },
                device: "both_desktop_and_mobile"
            }
        ],
        extra_section: [
            {
                url: "/sites/default/files/2024-06/ticketmaster-5-logo-black-and-white.png",
                "image_width": "175",
                type: "image_only",
                href: "https://am.ticketmaster.com/sundevils/buy?wt_mc_id=NCAA_ASU_DD_TAB&utm_source=sundevils.com&utm_medium=client&utm_campaign=NCAA_ASU&utm_content=DD_TAB",
                text: "Ticketmaster",
                alt: "Sponsor Image",
                device: "both_desktop_and_mobile"
            }
        ],
        is_sports_type: true,
        mobile: "",
        device: "both_desktop_and_mobile"
    },
    {
        href: "/tickets",
        text: "Tickets",
        icon: "",
        items: [
            [
                {
                    href: "/tickets/single-game-tickets",
                    text: "Tickets by Sport",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: "heading",
                    extra_links: ""
                },
                {
                    href: "/tickets/football",
                    text: "Football",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "icon_name": "football",
                        "style": "fa-fa-fa-fa-fas",
                        "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:15:\"fa-fa-fa-fa-fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                    },
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/mens-basketball",
                    text: "M. Basketball",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/basketball_5.svg",
                        "svg_icon_name": "Basketball hoop"
                    },
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/womens-basketball",
                    text: "W. Basketball",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/basketball_6.svg",
                        "svg_icon_name": "Basketball hoop"
                    },
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/ice-hockey",
                    text: "Ice Hockey",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/ice-hockey_3.svg",
                        "svg_icon_name": "Hockey puck and stick"
                    },
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/baseball",
                    text: "Baseball",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "icon_name": "baseball-bat-ball",
                        "style": "fa-fa-fa-fa-fas",
                        "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:15:\"fa-fa-fa-fa-fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                    },
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/softball",
                    text: "Softball",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "icon_name": "baseball",
                        "style": "fa-fa-fa-fas",
                        "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:12:\"fa-fa-fa-fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                    },
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/volleyball",
                    text: "Volleyball",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "icon_name": "volleyball",
                        "style": "fa-fa-fa-fas",
                        "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:12:\"fa-fa-fa-fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                    },
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/wrestling",
                    text: "Wrestling",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/wrestling_1.svg",
                        "svg_icon_name": "Two people grappling"
                    },
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/gymnastics",
                    text: "Gymnastics",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/gymnastics_1.svg",
                        "svg_icon_name": "Person twirling"
                    },
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/soccer",
                    text: "Soccer",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "icon_name": "futbol",
                        "style": "fa-fa-fa-fas",
                        "settings": "a:2:{s:7:\"masking\";a:2:{s:4:\"mask\";s:0:\"\";s:5:\"style\";s:12:\"fa-fa-fa-fas\";}s:16:\"power_transforms\";a:3:{s:5:\"scale\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_y\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}s:10:\"position_x\";a:2:{s:4:\"type\";s:0:\"\";s:5:\"value\";s:0:\"\";}}}"
                    },
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/lacrosse",
                    text: "Lacrosse",
                    device: "both_desktop_and_mobile",
                    icon: {
                        "svg_icon": "https://mobile-web-sda.ws.asu.edu//sites/default/files/2024-07/lacrosse_2.svg",
                        "svg_icon_name": "Lacrosse stick and ball"
                    },
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/non-ticketed",
                    text: "Non-Ticketed Sports",
                    icon: "",
                    "variant": "muted",
                    type: "variant muted",
                    extra_links: ""
                }
            ],
            [
                {
                    href: "/tickets/season-tickets",
                    text: "Season and Group Ticket Sales",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: "heading",
                    extra_links: ""
                },
                {
                    href: "/tickets/season-tickets",
                    text: "Season Tickets",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/group-tickets",
                    text: "Group Tickets",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/season-tickets#mini-plans",
                    text: "Mini Plans",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://am.ticketmaster.com/sundevils?CAMEFROM=CFC_SUNDEVILS_WEB_SUNDEVILS_GENERAL&brand=sundevils",
                    text: "Access Your Ticket Account",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                }
            ],
            [
                {
                    href: "/tickets-just-for-you",
                    text: "Tickets Just for You",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: "heading",
                    extra_links: ""
                },
                {
                    href: "/tickets/community-tickets#current-asu-students",
                    text: "ASU Students",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/community-tickets#young-alumni-program",
                    text: "ASU Young Alumni",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/community-tickets#asu-faculty-staff",
                    text: "ASU Faculty and Staff",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/community-tickets#military-first-responders",
                    text: "Military and First Responders",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                }
            ],
            [
                {
                    href: "/help-with-tickets",
                    text: "Help with Tickets",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: "heading",
                    extra_links: ""
                },
                {
                    href: "https://am.ticketmaster.com/sundevils/",
                    text: "Manage Your Account",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/tickets/mobile-ticketing",
                    text: "Mobile Ticketing",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2013/4/17/208252607.aspx",
                    text: "Transfer or Donate your Tickets",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://asu.co1.qualtrics.com/jfe/form/SV_bJazkU0uenxaeTY?source=sundevils_com",
                    text: "Request a Donation",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2014/4/30/209485283.aspx",
                    text: "Ticket Policies",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2013/8/12/209109460.aspx",
                    text: "Contact the Ticket Office",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                }
            ]
        ],
        buttons: [
            {
                href: "/tickets",
                text: "See all ticketing info",
                "color": "gold",
                icon: [],
                device: "both_desktop_and_mobile"
            }
        ],
        extra_section: [
            {
                url: "/sites/default/files/2024-06/ticketmaster-5-logo-black-and-white.png",
                "image_width": "175",
                type: "image_only",
                href: "https://am.ticketmaster.com/sundevils/buy?wt_mc_id=NCAA_ASU_DD_TAB&utm_source=sundevils.com&utm_medium=client&utm_campaign=NCAA_ASU&utm_content=DD_TAB",
                text: "Ticketmaster",
                alt: "Sponsor Image",
                device: "both_desktop_and_mobile"
            }
        ],
        is_sports_type: true,
        mobile: "",
        device: "both_desktop_and_mobile"
    },
    {
        href: "/fans-and-community",
        text: "Fans and Community",
        icon: "",
        items: [
            [
                {
                    href: "/shop",
                    text: "We've Got Spirit",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: "heading",
                    extra_links: ""
                },
                {
                    href: "/shop",
                    text: "Shop Sun Devil Gear",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2013/4/17/208256866.aspx",
                    text: "Sparky the Sun Devil",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://sundevilband.asu.edu/",
                    text: "Athletic Bands",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2013/4/17/208253530",
                    text: "Spirit Squad",
                    device: "mobile_only",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2021/11/17/2021-22-arizona-state-posters-phone-wallpapers-and-desktop-backgrounds.aspx",
                    text: "Downloads",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                }
            ],
            [
                {
                    href: "/for-kids",
                    text: "For Kids",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: "heading",
                    extra_links: ""
                },
                {
                    href: "/fans-community/for-kids#SunDevilCamps",
                    text: "Sports Camps",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/fans-community/for-kids#JuniorSunDevilClub",
                    text: "Junior Sun Devil Club",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                }
            ],
            [
                {
                    href: "",
                    text: "Game Day Logistics",
                    device: "mobile_only",
                    icon: "",
                    type: "heading",
                    extra_links: ""
                },
                {
                    href: "/fans-community/game-day/gameday-guide",
                    text: "Your Game Day Guide",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/fans-community/game-day/tailgates",
                    text: "Tailgates",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/fans-community/game-day/gameday-guide#getting-here",
                    text: "Directions",
                    device: "desktop_only",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2024/2/15/gameday-parking.aspx",
                    text: "Parking",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/fans-community/game-day/clear-bag-policy",
                    text: "Clear Bag Policy",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/fans-community/game-day/gameday-guide#emergency-safety",
                    text: "Fan Safety Protocols",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2018/9/13/sun-devil-radio-network",
                    text: "Sun Devil Radio Network",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2021/11/17/2021-22-arizona-state-posters-phone-wallpapers-and-desktop-backgrounds.aspx",
                    text: "Downloads",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                }
            ],
            [
                {
                    href: "/history-and-traditions",
                    text: "History and Traditions",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: "heading",
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2013/4/17/208257019",
                    text: "Sun Devil Traditions",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2013/4/17/208257058.aspx",
                    text: "Sun Devil Hall of Fame and Hall of Distinction",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2016/6/20/asu-olympian-history",
                    text: "Olympians",
                    device: "desktop_only",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2013/4/17/208257030.aspx",
                    text: "Sports Hall of Fame",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2013/4/17/208257058",
                    text: "All-Americans",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2022/3/3/arizona-state-pac-12-scholar-athletes-of-the-year.aspx",
                    text: "Scholar-Athletes of the Year",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2013/4/17/208257049.aspx",
                    text: "Distinguished Alumni",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2013/4/17/208257030.aspx",
                    text: "National Champions",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2018/5/15/elite-90-winners.aspx",
                    text: "Elite 90 Winners",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                }
            ]
        ],
        buttons: "",
        extra_section: [
            {
                "button_uri": "/support-donate/NIL",
                "button_text": "Request now",
                "extra_text": "Request an autograph, appearance, shoutout, social post and more from your favorite athletes.",
                type: "text_with_button",
                device: "both_desktop_and_mobile"
            },
            {
                url: "/sites/default/files/2024-08/Omni-tempe.png",
                "image_width": "203",
                type: "image_only",
                href: "https://www.omnihotels.com/hotels/tempe-asu/specials/asu-special-event-rate",
                text: "Omni Tempe at Asu",
                alt: "Sponsor Image",
                device: "both_desktop_and_mobile"
            }
        ],
        is_sports_type: true,
        mobile: "",
        device: "both_desktop_and_mobile"
    },
    {
        href: "/ways-to-support",
        text: "Ways to Support",
        icon: "",
        items: [
            [
                {
                    href: "/ways-to-support/name-image-likeness-nil",
                    text: "Name, Image, Likeness (NIL)",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: "heading",
                    extra_links: ""
                },
                {
                    href: "/support-donate/NIL",
                    text: "Request an Autograph, Photo, Shoutout",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/support-donate/NIL#NILInAction",
                    text: "Book an Appearance",
                    device: "mobile_only",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/support-donate/NIL#ConnectWithUs",
                    text: "Maximize Your Brand Through NIL",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                }
            ],
            [
                {
                    href: "/become-involved",
                    text: "Become Involved",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: "heading",
                    extra_links: ""
                },
                {
                    href: "/tickets",
                    text: "Buy Tickets to a Game",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/support-donate#SunDevilClub",
                    text: "Join the Sun Devil Club",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/fans-community/for-kids#JuniorSunDevilClub",
                    text: "Join the Junior Sun Devil Club",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/support-donate#SunAngelCollective",
                    text: "Join the Sun Angel Collective",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                }
            ],
            [
                {
                    href: "/ways-to-give",
                    text: "Ways to Give",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: "heading",
                    extra_links: ""
                },
                {
                    href: "/support-donate#MakeADonation",
                    text: "Make a Donation",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                }
            ],
            [
                {
                    href: "/corporate-partnerships",
                    text: "Corporate Partnerships",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: "heading",
                    extra_links: ""
                },
                {
                    href: "/support-donate/corporate-partnerships",
                    text: "Connect Your Brand with Sun Devil Nation",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                }
            ]
        ],
        buttons: [
            {
                href: "/support-donate/",
                text: "Support the Sun Devils",
                "color": "gold",
                icon: [],
                device: "both_desktop_and_mobile"
            }
        ],
        extra_section: "",
        is_sports_type: true,
        mobile: "",
        device: "both_desktop_and_mobile"
    },
    {
        href: "/about",
        text: "About",
        icon: "",
        items: [
            [
                {
                    href: "/about",
                    text: "About Sun Devil Athletics",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/about/events-calendar",
                    text: "Events Calendar",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/about/news",
                    text: "News",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://sundevilcompliance.asu.edu/prospective-student-athletes/key-questions/what-should-a-prospective-student-athlete-do-to-get",
                    text: "Play for ASU",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/facilities",
                    text: "Facilities and Venues",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2022/7/11/208253785.aspx",
                    text: "Media Relations",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/staff-directory",
                    text: "Staff Directory",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                }
            ],
            [
                {
                    href: "https://thesundevils.com/sports/2013/4/17/208256802",
                    text: "Jobs and Internships",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: "column break",
                    extra_links: ""
                },
                {
                    href: "https://www.teamworksapp.com/ext2/92288ef3-17be-441b-9ab4-bf3f6e70ad57",
                    text: "Request a Speaking Engagement or Appearance",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://asu.co1.qualtrics.com/jfe/form/SV_bJazkU0uenxaeTY?source=sundevils_com",
                    text: "Request a Donation",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/sustainability",
                    text: "Sustainability Efforts",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://sundevilcompliance.asu.edu/",
                    text: "Compliance",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "/about/compliance/ncaa-resolution",
                    text: "NCAA Resolution",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://big12sports.com/",
                    text: "Big 12 Conference",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                },
                {
                    href: "https://thesundevils.com/sports/2013/8/12/209109460.aspx",
                    text: "Contact Us",
                    device: "both_desktop_and_mobile",
                    icon: "",
                    type: null,
                    extra_links: ""
                }
            ]
        ],
        buttons: "",
        extra_section: [
            {
                url: "/sites/default/files/2024-06/c1583b04098111219796c2407d53f3c9.png",
                "image_width": "213",
                type: "image_only",
                href: "https://thesundevils.com/common/controls/adhandler.aspx?ad_id=109&target=https%3A//playatgila.com/",
                text: "Extra section",
                alt: "Sponsor Image",
                device: "both_desktop_and_mobile"
            }
        ],
        is_sports_type: true,
        mobile: "",
        device: "both_desktop_and_mobile"
    }
],
};
