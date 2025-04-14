export const drupalSocialMediaSectionProps = {
  title: "Sun Devil Nation",
  body: "<p><span>Share your Sun Devil love! The Sun Devil Nation is a globally community that bleeds maroon and gold.</span></p>",
  embed_code:
    '<script async="" src="https://www.tintup.com/app/dist/embedded.js"></script><div class="tintup" style="height:534px;width:100%;" data-id="124422569" data-columns="" data-personalization-id="1097643" data-mobilescroll="true" data-infinitescroll="true">&nbsp;</div>',
  feed_type: "default", // "small"
  social_media_handles: [
    {
      icon: {
        icon_name: "facebook",
        style: "fa-brands",
        settings:
          'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:9:"fa-brands";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
      },
      link: "internal:/facebook",
    },
    {
      icon: {
        icon_name: "x-twitter",
        style: "fa-brands",
        settings:
          'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:9:"fa-brands";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
      },
      link: "internal:/twitter",
      label: "MY TWITTER LABEL",
    },
    {
      icon: {
        icon_name: "instagram",
        style: "fa-brands",
        settings:
          'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:9:"fa-brands";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
      },
      link: "internal:/instagram",
    },
  ],
  sponsor_block: [
    {
      text: "Presented by: ",
      name: "Ford",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png",
      href: "https://www.ford.com/",
      googleAdHead: `
      <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
      <script>
        console.log('googleAdHead');
        window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function() {
          googletag.defineSlot('/23203588234/LSQA', [135, 38], 'div-gpt-ad-1731610205689-0').addService(googletag.pubads());
          googletag.pubads().enableSingleRequest();
          googletag.pubads().collapseEmptyDivs();
          googletag.enableServices();
        });
      </script>
      `,
      googleAdBody: `
      <!-- /23203588234/LSQA -->
      <div id='div-gpt-ad-1731610205689-0' style='min-width: 135px; min-height: 38px;'>
        <script>
          console.log('googleAdBody');
          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1731610205689-0'); });
        </script>
      </div>
      `,
    },
  ],
};
