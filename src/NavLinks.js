/**
 *  header-menu and sidebar menu data
 */

export default [
   {
      "menu_title": "Men",
      "type": "subMenu",
      "path": "/",
      "icon": "home",
      "child_routes": [
         {
            "path": "/",
            "menu_title": "Home Default",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/index-new-fashion",
            "menu_title": "Home New Fashion",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/index-modern",
            "menu_title": "Home Modern",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/index-home-classic",
            "menu_title": "Home Classic",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
      ]
   },
   {
      "menu_title": "Women",
      "path": "/shop",     
      "icon": "party_mode",     
      "child_routes": null
   },
   {
      "menu_title": "Books",
      "path": "/Blogfullwidth",     
      "icon": "party_mode",      
      "child_routes":null
   },

   {
      "menu_title": "Electronics",      
      "path": "",
      "icon": "home",
      "child_routes":null
   },
   {
      "menu_title": "Furniture",
      "path": "/admin-panel/Reports",
      "icon": "perm_identity",
      "child_routes": null
   }
]
