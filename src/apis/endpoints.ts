import { LANG_S3_API_URL } from '@common/envVariables';

const endpoints = {
  store: {
    list: '/store/list',
    info: '/store/info',
    get_cdp_store_info: '/store/get_cdp_store_info',
    create_new: '/store/create_new',
    tablet_theme: '/store/tablet_theme',
    update: '/store/update',
    update_logo_img: '/store/update_logo_img',
    default_language_setting: '/store/default_language_setting',
    update_tablet_version: '/store/update_tablet_version',
    default_currency_setting: '/store/default_currency_setting',
    option_layout: '/store/option_layout',
    full_store_list: '/store/full_store_list',
    full_store_update: '/store/full_store_update',
    tablet_brand_list: '/store/tablet_brand_list',
    store_state_list: '/store/store_state_list',
    ad_banner_list: '/store/ad_banner_list',
    update_background_img: '/store/update_background_img',
    update_category_background_img: '/store/update_category_background_img',
    update_tablet_logo_img: '/store/update_tablet_logo_img',
    custom_style_update: '/store/custom_style_update',
    custom_style_theme_list: '/store/custom_style_theme_list',
    use_language_flag_list: '/store/use_language_flag_list',
    list_all_store_name: '/store/list_all_store_name',
    update_restroom_img: '/store/update_restroom_img',
    url_version_list: '/store/url_version_list',
    get_theme_list: '/store/theme/get_theme_list',
    all_tablet_url_list: '/store/all_tablet_url_list',
    store_url_match_list: '/store/store_url_match_list',
    store_theme_match_list: '/store/store_theme_match_list',
    update_stores_theme: '/store/theme/update_stores_theme',
    apk_list: '/store/apk_list',
    pos_type_list: '/store/pos_type_list',
  },
  category: {
    list: '/category/list',
    create: '/category/create',
    update: '/category/update',
    delete: '/category/delete',
    sort_update: '/category/sort_update',
    child_category_list: '/category/child_category_list',
    v2: {
      create: '/v2/category/create',
      list: '/v2/category/list',
      update: '/v2/category/update',
      excel: { goods_list: '/v2/excel/goods_list' },
    },
  },
  goods: {
    update: '/goods/update',
    list: '/goods/list',
    set_update: '/goods/set_update',
    goods_sort_by: '/goods/goods_sort_by',
    update_img: '/goods/update_img',
    lang_goods_list: '/goods/lang_goods_list',
    lang_category_list: '/goods/lang_category_list',
    all_lang_trans: '/goods/all_lang_trans',
    lang_trans: '/goods/lang_trans',
    update_lang_trans: '/goods/update_lang_trans',
    update_goods_html_trans: '/goods/update_goods_html_trans',
    info: '/goods/info',
    custom_category: '/goods/custom_category',
    full_good_list: '/goods/full_good_list',
    full_goods_category_list: '/goods/full_goods_category_list',
    update_all_checked_goods_setting: '/goods/update_all_checked_goods_setting',
    search_list: '/v2/goods/search_list',
    update_checked_goods_type: '/v2/goods/update_checked_goods_type',
  },
  users: {
    login: '/users/login',
    info: '/users/info',
    update: '/users/update',
    manager_login: '/users/manager_login',
  },
  banner: {
    list: '/banner/list',
    create: '/banner/create',
    update: '/banner/update',
    delete: '/banner/delete',
  },
  tablet: {
    list: '/tablet/list',
    create: '/tablet/create',
    create_all: '/tablet/create_all',
    delete: '/tablet/delete',
    payment_info: '/tablet/payment_info',
    payment_update: '/tablet/payment_update',
    payment_update_all: '/tablet/payment_update_all',
    van_type: '/tablet/van_type',
    apk_list: '/tablet/apk_list',
    apk_update: '/tablet/apk_update',
    force_update: '/tablet/force_update',
    full_refresh: '/tablet/full_refresh',
    language_save: '/tablet/language_save',
    update_stores_tablet_version: '/tablet/update_stores_tablet_version',
    get_tablet_version_info: '/tablet/get_tablet_version_info',
  },
  tablet_api: { device_usage: '/torder-node-tablet-api/device-usage' },
  option: {
    pos_init: '/option/pos_init',
    create: '/option/create',
    delete: '/option/delete',
    list_all: '/option/list_all',
    create_get: '/option/create_get',
    update_sort: '/option/update_sort',
    update: '/option/update',
    update_detail: '/option/update_detail',
    get_trans_option_list: '/option/get_trans_option_list',
    all_lang_trans: '/option/all_lang_trans',
    item_all_lang_trans: '/option/item_all_lang_trans',
    update_lang_trans: '/option/update_lang_trans',
    option_group_name_list: '/option/option_group_name_list',
    update_option_group_sort: '/option/update_option_group_sort',
  },
  promotion: {
    date: '/promotion/HITE_JINRO/stats/v2/date',
    phone_list: '/promotion/HITE_JINRO/stats/v2/prize/daily/phone/list',
    forAgency: '/promotion/HITE_JINRO/stats/v2/forAgency',
    join_list: '/promotion/HITE_JINRO/stats/v2/join/list',
    sum_list: '/promotion/HITE_JINRO/stats/v2/prize/sum/list',
    forceUpdateUserPhone: '/promotion/HITE_JINRO/join/forceUpdateUserPhone',
    prize_list: '/promotion/HITE_JINRO/prize/list',
    sendCoupon: '/promotion/HITE_JINRO/join/sendCoupon',
    resendCoupon: '/promotion/HITE_JINRO/join/resendCoupon',
    forceUpdateWinner: '/promotion/HITE_JINRO/join/forceUpdateWinner',
    abusing_store_list: '/promotion/HITE_JINRO/stats/v2/abusing',
    event: '/v2/event',
    list: '/v2/event/list',
    event_store: '/v2/event/store/list',
    file: '/v2/event/file',
    search_event: '/v2/admin/ad-camp',
    register_event: '/v2/admin/ad-camp/register',
    remove_event: '/v2/admin/ad-camp/remove',
    forAllStore: '/v2/stats/daily/alcohol/forAllStore',
    forEventStore: '/v2/stats/daily/alcohol/forEventStore',
  },
  notice: {
    noticeFile: '/v2/notice/file',
    noticeInfo: '/v2/notice/info',
    noticeStatus: '/v2/notice/status',
    searchTypeList: '/v2/notice/views',
    storeList: '/v2/store/storeList',
  },
  cs: {
    inquiry: {
      list: '/cs/list',
      list_store: '/cs/list_store',
      common: '/cs/common',
      create: '/cs/create',
      update: '/cs/update',
      info: '/cs/info',
      chart_data: '/cs/chart_data',
      chart_comment_list: '/cs/chart_comment_list',
      chart_comment: '/cs/chart_comment',
    },
  },
  fran: { list: '/fran/list' },
  stats: {
    daily: '/v2/stats/daily',
    forAllStore: '/v2/stats/daily/alcohol/forAllStore',
    forEventStore: '/v2/stats/daily/alcohol/forEventStore',
  },
  logs: {
    tablet_pos_log: '/logs/tablet_pos_log',
    tablet_get_order_log: '/logs/tablet_get_order_log',
    orderview_today_redis_log: '/logs/orderview_today_redis_log',
    orderview_redis_log: '/logs/orderview_redis_log',
    order_cart_test: '/logs/order_cart_test',
    getTabletList: '/logs/getTabletList',
    transaction_app_log: '/logs/transaction_app_log',
    transaction_web_log: '/logs/transaction_web_log',
  },
  excel: {
    upload_torder_tablet_version: '/excel/upload_torder_tablet_version',
    upload_lang_trans: '/excel/upload_lang_trans',
    download_lang_trans: '/excel/download_lang_trans',
    download_store_list: '/excel/download_store_list',
    download_cs_list: '/excel/download_cs_list',
    download_category_template: '/excel/download_category_template',
    download_theme_list: '/excel/download_theme_list',
    category_lang_trans_list_download:
      '/excel/category_lang_trans_list_download',
    category_lang_trans_upload: '/excel/category_lang_trans_upload',
    option_group_lang_trans_list_download:
      '/excel/option_group_lang_trans_list_download',
    option_group_lang_trans_upload: '/excel/option_group_lang_trans_upload',
    option_item_lang_trans_list_download:
      '/excel/option_item_lang_trans_list_download',
    option_item_lang_trans_upload: '/excel/option_item_lang_trans_upload',
    set_group_lang_trans_list_download:
      '/excel/set_group_lang_trans_list_download',
    set_group_lang_trans_upload: '/excel/set_group_lang_trans_upload',
    goods_html_lang_trans_list_download:
      '/excel/goods_html_lang_trans_list_download',
    goods_html_lang_trans_upload: '/excel/goods_html_lang_trans_upload',
    goods_option_group_lang_trans_list_download:
      '/excel/goods_option_group_lang_trans_list_download',
    goods_option_group_lang_trans_upload:
      '/excel/goods_option_group_lang_trans_upload',
    goods_option_item_lang_trans_list_download:
      '/excel/goods_option_item_lang_trans_list_download',
    goods_option_item_lang_trans_upload:
      '/excel/goods_option_item_lang_trans_upload',
    torder_member_list_download: '/excel/torder_member_list_download',
    platform_member_list_download: '/excel/platform_member_list_download', // uplus 관련: torder->platform
    store_member_list_download: '/excel/store_member_list_download',
    logs_order_today_download: '/excel/logs_order_today_download',
    logs_order_list_download: '/excel/logs_order_list_download',
    logs_tablet_pos_download: '/excel/logs_tablet_pos_download',
    logs_tablet_get_order_download: '/excel/logs_tablet_get_order_download',
    logs_order_cart_test_download: '/excel/logs_order_cart_test_download',
    logs_transaction_app_download: '/excel/logs_transaction_app_download',
    logs_transaction_web_download: '/excel/logs_transaction_web_download',
    member_register_list_download: '/excel/member_register_list_download',
  },
  s3_globalization_language: { language: LANG_S3_API_URL },
  map: { xy_list: '/map/xy_list' },
  member: {
    department_list_for_create: '/member/department_list_for_create',
    corporation_list: '/member/corporation_list',
    auth_list_for_create: '/member/auth_list_for_create',
    state_list: '/member/state_list',
    torder_member_create: '/member/torder_member_create',
    auth_update: '/member/auth_update',
    torder_member_list: '/member/torder_member_list',
    store_member_list: '/member/store_member_list',
    torder_member_info: '/member/torder_member_info',
    change_member_pw: '/member/change_member_pw',
    torder_member_update: '/member/torder_member_update',
    auth_list: '/member/auth_list',
    store_member_info: '/member/store_member_info',
    store_member_update: '/member/store_member_update',

    // 통합 인증
    member_register_list: '/member/member_register_list',
    member_register: '/member/member_register',
    member_register_state: '/member/member_register_state',
    member_register_history: '/member/member_register_history',
    member_register_store: '/member/member_register_store',

    // uplus 관련: torder->platform
    platform_member_create: '/member/platform_member_create',
    platform_member_list: '/member/platform_member_list',
    platform_member_info: '/member/platform_member_info',
    platform_member_update: '/member/platform_member_update',
  },
  helper: {
    get_member_id_exists: '/helper/get_member_id_exists',
    get_store_code_exists: '/helper/get_store_code_exists',
    get_tablet_id_exists: '/helper/get_tablet_id_exists',
    get_store_serial_number_exists: '/helper/get_store_serial_number_exists',
    get_posMiddleWareCode_exists: '/helper/get_posMiddleWareCode_exists',
  },
  category_template: {
    template_get: '/category_template/template_get',
    template_mapping: '/category_template/template_mapping',
    template_save: '/category_template/template_save',
    template_restore_list: '/category_template/template_restore_list',
    template_restore_save: '/category_template/template_restore_save',
  },
  etc: {
    health_check: '/etc/health_check',
    laboratory: { list: '/laboratory/list' },
  },
  hyatt: {
    option: {
      pos_init: '/hyatt/option/pos_init',
      option_group_list: '/hyatt/option/option_group_list',
      option_group_item: '/hyatt/option/option_group_item',
      option_item_update: '/hyatt/option/option_item_update',
      option_item_sort: '/hyatt/option/option_item_sort',
      option_group_sort: '/hyatt/option/option_group_sort',
      create: '/hyatt/option/create',
      delete: '/hyatt/option/delete',
      update: '/hyatt/option/update',
      create_get: '/hyatt/option/create_get',
      list_all: '/hyatt/option/list_all',
    },
    set: {
      pos_init: '/hyatt/set/pos_init',
      set_group_list: '/hyatt/set/set_group_list',
      set_group_item: '/hyatt/set/set_group_item',
      set_item_sort: '/hyatt/set/set_item_sort',
      sort_group_list: '/hyatt/set/sort_group_list',
      set_group_sort: '/hyatt/set/set_group_sort',
      create: '/hyatt/set/create',
      delete: '/hyatt/set/delete',
      update: '/hyatt/set/update',
      update_lang_trans: '/hyatt/set/update_lang_trans',
    },
    common: { upload_image: '/hyatt/common/upload_image' },
  },
  // 2단옵션 관련 api: uplus only
  // set 옵션은 현재 사용하지 않으므로 uplus api 리스트에 없음
  order2: {
    option: {
      pos_init: '/order2/option/pos_init',
      option_group_list: '/order2/option/option_group_list',
      option_group_item: '/order2/option/option_group_item',
      option_item_update: '/order2/option/option_item_update',
      option_item_sort: '/order2/option/option_item_sort',
      option_group_sort: '/order2/option/option_group_sort',
      create: '/order2/option/create',
      delete: '/order2/option/delete',
      update: '/order2/option/update',
      create_get: '/order2/option/create_get',
      list_all: '/order2/option/list_all',
      update_lang_trans: '/order2/option/update_lang_trans',
    },
  },
  auth: {
    torder_auth_list: '/auth/torder_auth_list',
    torder_auth_info: '/auth/torder_auth_info',
  },
  credit: {
    tablet: { status: '/credit/v2/tablet/status' },
    pends: '/credit/v2/pays/pends',
    fcm: {
      send: { log: '/credit/v2/fcm/send/log' },
      device: {
        logs: '/credit/v2/fcm/device/logs',
        device: '/credit/v2/fcm/device',
      },
      devices: '/credit/v2/fcm/devices',
    },
  },
  entertainmentAdmin: {
    stores: {
      basic: '/entertainment-admin/v2/stores',
      search: '/entertainment-admin/v2/stores/search',
      toExcel: '/entertainment-admin/v2/stores/search/to-excel',
    },
    games: {
      histories: '/entertainment-admin/v2/games/histories',
      stat: '/entertainment-admin/v2/games/histories/stat',
      search: '/entertainment-admin/v2/games/histories/stats/search',
      toExcel: '/entertainment-admin/v2/games/histories/to-excel',
      settings: '/entertainment-admin/v2/games/settings',
    },
    auction: { histories: '/entertainment-admin/v2/auction/histories' },
    jackpot: { histories: '/entertainment-admin/v2/jackpot/histories' },
  },
  waiting: {
    store: '/admin/store',
    config: { admin: '/config/admin' },
    auth: { signUp: '/auth/sign-up' },
  },
  common: { pos_init_date: '/common/pos_init_date' },
  migration: {
    convert_good_options: '/migration/convert_good_options',
    convert_store_version_preview: '/migration/convert_store_version_preview',
  },
  allergy: {
    list: '/allergy/list',
    add_allergy: '/allergy/add_allergy',
    update_allergy: '/allergy/update_allergy',
    update_allergy_status: '/allergy/update_allergy_status',
    delete_allergy: '/allergy/delete_allergy',
  },
};

export default endpoints;
