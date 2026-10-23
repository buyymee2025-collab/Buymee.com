import { isRetiredSneaker, refreshRetainedSneaker, NEW_STUDIO_SNEAKERS } from './sneakerCatalogRefresh.js'
// Product data, including the reviewed October 2026 catalogue refresh.

const cloud = 'https://res.cloudinary.com/dnvgl9k4i/';
const prefixes = [
  "ChatGPT_Image_Oct_12_2026_",
  "ChatGPT_Image_Oct_7_2026_",
  "ChatGPT_Image_Oct_6_2026_",
  "ChatGPT_Image_Oct_8_2026_",
  "exec-"
];

const assetRows = `1791807146 ~4|4eb48c1e-6a91-4b33-99e8-dab38e811a95_fgmp0p
1791807192 009_xmhnut
!1791807271 1006_1_1_onutvu.mp4
1791807150 ~4|8d16f0df-6f80-4c0a-a04c-5e9457049834_hqplir
!1791807224 1006_jq7afq.mp4
1791807158 ~4|532215fd-58ef-409c-87dd-3595ffdc07e4_afqalb
1791807155 ~4|2d4ea40b-0182-4c9f-99ce-1a2a9c746782_uenvdq
1791807145 dshgdgd_fje9zu
1791807152 ~4|61b303c2-6f80-4357-aa1b-9f2f69d2e237_qg0n77
1791807141 ddd_dpwikt
1791807161 ~4|4974bbc1-0522-4b90-b7b2-7b3d7590fbb5_oqvfgc
1791807184 RM_002_hz8stj
1791807157 ~4|1842d8d0-14c1-436c-88e0-72e71167e456_quuoub
1791807182 Luxury_Skeleton_Watch_Product_Shot_yc2wxk
1791807185 Richard_Mille_Style_Skeleton_Watch_Collage_ftxjyh
1791807197 ~2|10_00_23_AM_sg0ksi
1791829444 ~2|10_00_23_AM_ncobvz
1791829442 Luxury_Skeleton_Watch_Product_Shot_jkwnqf
1791829440 RM_002.jpeg_mfxzwq
1791829440 ~4|1842d8d0-14c1-436c-88e0-72e71167e456_ud1dda
1791829437 ~4|4974bbc1-0522-4b90-b7b2-7b3d7590fbb5_h6zfpk
1791807163 ~4|ade009c6-68e0-4750-b75a-9ad3d462c7c9_ejbamh
1791807166 ~4|e0bf2b3d-4090-499a-8905-7d37470b203d_c6x1ll
1791807159 ~4|a7c6ac4e-3c1e-425f-9b74-cc05ca465621_dmcvvh
1791807106 ~1|11_20_04_AM_2_qzp1gn
1791807099 ~1|11_20_04_AM_fbcwhh
1791829451 ~1|11_20_04_AM_llmhoe
1791807022 ~4|8b36c980-6ead-4c13-84fc-6321af479c21_yqoo8x
1791807103 ~1|11_31_15_AM_bclyln
1791826876 ~4|305736ef-a23f-4b05-9c11-2d49ead357b3_nz9b0v
1791829436 ~1|11_31_15_AM_b4nwk5
1791829400 ~4|8b36c980-6ead-4c13-84fc-6321af479c21_aa2vba
1791807103 ~1|11_33_18_AM_ntv3at
1791829429 ~1|11_33_18_AM_a8krc8
1791807020 ~4|5c34cdb0-7bb6-41af-8d78-574a1a02a450_rlgmor
1791807025 ~4|305736ef-a23f-4b05-9c11-2d49ead357b3_or3z9x
1791829056 ~4|5c34cdb0-7bb6-41af-8d78-574a1a02a450_bk1giz
1791807018 KAVV0170_ly500c
1791807018 IGSR6143_jcxvo8
!1791807236 KRQGE7064_rvm5l8.mp4
1791807016 ~1|11_39_15_AM_e9of27
1791807032 0969f2ff-32ee-4d80-b6a0-5c768812403c_burreo
1791807015 ~1|11_39_15_AM_-_Copy_s8jore
1791826264 ~1|11_39_15_AM_z92zge
1791807099 ~1|03_33_29_PM_yjcb5v
1791807100 ~1|03_32_06_PM_yu7fej
1791807099 ~1|03_32_58_PM_qd5lwe
1791829415 ~1|03_33_29_PM_s77bvk
1791829408 ~1|03_32_58_PM_bkyrs1
1791829402 ~1|03_32_06_PM_wn9vfp
1791807189 UWGO9249_lhchnw
1791807145 EWLI9650_yowsd8
!1791807035 BHTB9771_y7aziu.mp4
1791807195 8d41eb23-f6b6-4976-87ab-5020c9d2d66a_zmujsh
1791807023 OSLN1253_rfj5jc
1791807021 ~4|7a576ed2-7583-42c3-9273-6b66c5e3a57c_mrx7kg
1791807019 ~4|97800666-9e44-468a-886a-b0f20a705189_ypk1q6
1791807104 ~1|11_48_12_AM_n17xws
1791807108 ~1|12_05_17_PM_dsj9bw
1791807108 ~1|11_48_12_AM_-_Copy_z8724k
1791807106 ~1|12_05_17_PM_-_Copy_b3ujd2
1791829451 ~1|12_05_17_PM_szdiqc
1791829448 ~1|11_48_12_AM_gvr8su
1791829399 ~4|97800666-9e44-468a-886a-b0f20a705189_n1rxht
1791829396 ~4|7a576ed2-7583-42c3-9273-6b66c5e3a57c_gokajb
1791807024 OONU6969_pz5usk
1791807020 DCER5450_se2l6l
1791807016 ~1|03_29_28_PM_qoaasx
1791807104 ~1|03_28_04_PM_kf9a7w
1791807098 ~1|03_30_37_PM_ahgvbe
1791829408 ~1|03_28_04_PM_qduet2
1791829398 ~1|03_30_37_PM_uy5y91
1791829059 ~1|03_29_28_PM_mnaamu
1791807136 ~3|01_43_37_AM_pe1t7r
1791807126 ~3|01_42_18_AM_h6vxya
1791807130 ~3|01_46_39_AM_gykmnd
1791829409 ~3|01_46_39_AM_g4trwm
1791829408 ~3|01_43_37_AM_amlf4k
1791829405 ~3|01_42_18_AM_l3pofy
1791807037 ANIT3094_vmw6v4
1791807020 KGLF7427_r0zisl
1791807184 NXYH4079_dnlyvj
1791807035 tissot-chronograph-luxury-studio-ad-1920_ivrrnv
1791807036 tissot-chronograph-luxury-studio-ad-1920_2_zjcqre
1791807118 ~1|12_09_55_PM_npuhkg
1791807108 ~1|12_08_26_PM_aditqh
1791807111 ~1|12_08_26_PM_-_Copy_f2wasa
1791807110 ~1|12_09_55_PM_-_Copy_kyoci6
1791829449 ~1|12_08_26_PM_eppluk
1791829449 ~1|12_09_55_PM_bwkkea
1791829401 tissot-chronograph-luxury-studio-ad-1920_nq46at
1791829400 tissot-chronograph-luxury-studio-ad-1920_2_b4viqt
1791807164 ~4|dd1e9831-66d3-4dcf-9b7c-7628931345ed_bmjclz
1791807164 ~4|fc43e35e-8893-43c4-b528-dff16e8fe012_vyzqqg
1791829447 ~4|dd1e9831-66d3-4dcf-9b7c-7628931345ed_qnmlnn
1791829445 ~4|fc43e35e-8893-43c4-b528-dff16e8fe012_yyrdlp
1791807165 ~4|e8a1d39f-9684-4989-8234-c1b2fc74430f_aukfwx
1791807182 IMG_1258-luxury-ad-concept_a4a4ut
1791807114 ~1|12_15_51_PM_xya8xd
1791807118 ~1|12_14_16_PM_xmkvxu
1791807118 ~1|12_17_40_PM_w5qkz4
1791807114 ~1|12_14_16_PM_-_Copy_eugofh
1791807169 GQOR4157_o7vms9
1791807025 QDUS8459_uvjtqi
1791829424 ~1|12_15_51_PM_uwoki4
1791829422 ~1|12_14_16_PM_w28jkj
1791829418 ~1|12_17_40_PM_maemku
1791829414 ~3|01_47_40_AM_nj0ocd
1791807155 ~4|267f5cd5-bc14-4cf9-a7d5-774975a36930_otqprd
1791807152 ~4|5ea4c873-11fd-422c-acde-29d6144efa39_lnc2xy
1791807036 ~4|4610708c-851d-45ab-9d8d-afdf85abb074_ts6hvv
1791807119 ~1|12_39_38_PM_2_dfgtbz
1791807113 ~1|12_39_38_PM_zlyf31
1791829398 ~4|4610708c-851d-45ab-9d8d-afdf85abb074_bjw20c
1791807197 ~2|10_27_14_AM_vwlilj
1791807206 ~2|10_31_24_AM_jfidxz
1791807208 ~2|10_24_12_AM_opm693
1791807197 ~2|10_29_55_AM_ekrlll
1791829434 ~1|12_56_37_PM_nidvgr
1791829430 ~2|10_31_24_AM_rqediz
1791829428 ~2|10_24_12_AM_qflchl
1791829425 ~2|10_27_14_AM_zw68p2
1791807122 ~1|12_51_28_PM_vjn3zx
1791807136 ~1|12_55_22_PM_sesuf7
1791807127 ~1|12_48_39_PM_psifml
1791807129 ~1|12_56_37_PM_muomzz
1791829443 ~1|12_55_22_PM_jhhdeq
1791829437 ~2|10_29_55_AM_ws5doi
1791829434 ~1|12_48_39_PM_clrlfc
1791829426 ~1|12_51_28_PM_wthba0
1791807040 ~1|01_03_58_PM_f5rlqv
1791807204 ~1|01_00_20_PM_vqhafc
1791807048 ~1|01_06_55_PM_eqrdt0
1791807056 ~1|01_10_29_PM_lyaiio
1791807046 ~1|01_13_16_PM_ckovzn
1791807046 ~1|01_09_05_PM_r2oet4
1791807046 ~1|01_11_57_PM_a7p5m2
1791807047 ~1|01_30_53_PM_whr7nj
1791807051 ~1|01_36_51_PM_om6qmo
1791807057 ~1|01_38_02_PM_h2edm7
1791807019 ~3|02_14_01_AM_monouh
1791807138 ~3|02_15_08_AM_tz43aw
1791807142 ~3|02_19_17_AM_le5gyz
1791826875 ~3|02_14_01_AM_ykk3z8
1791829426 ~3|02_15_08_AM_tbkngl
1791829423 ~3|02_19_17_AM_nl8ols
1791807133 ~3|01_49_10_AM_hzv94d
1791807142 ~3|01_49_59_AM_t1ooos
1791807133 ~3|01_47_40_AM_w8fkqe
1791829415 ~3|01_49_10_AM_ta4si4
1791829411 ~3|01_49_59_AM_pvyyox
1791807096 ~1|03_26_50_PM_xqf0aw
1791807096 ~1|03_24_35_PM_s5kgtt
1791807095 ~1|03_26_10_PM_puoe2d
1791807092 ~1|03_24_08_PM_cgnnmr
1791829405 ~1|03_24_08_PM_ndi7dd
1791829405 ~1|03_26_10_PM_xjimzw
1791829396 ~1|03_24_35_PM_wzjjir
1791829101 ~1|03_26_50_PM_vioyzp
1791807136 ~3|02_01_38_AM_b0nxkd
1791807134 ~3|01_54_37_AM_jq4qmr
1791807139 ~3|02_03_15_AM_w2vela
1791829420 ~3|02_03_15_AM_eharkr
1791829418 ~3|02_01_38_AM_vgk3qa
1791829414 ~3|01_54_37_AM_qikien
1791807141 ~3|02_09_00_AM_se52zi
1791807141 ~3|02_06_13_AM_lmjoyo
1791807018 ~3|02_07_04_AM_sdrvc2
1791829422 ~3|02_09_00_AM_zcjqpn
1791829421 ~3|02_06_13_AM_okshe6
1791829398 ~3|02_07_04_AM_bsaf9g
1791807016 GYXZ7103_bdulho
1791807191 XGWE0460_vveksy
1791807162 ~4|bc4849a3-1d3e-42dc-af75-b637f37ad22e_yhusxc
1791807022 ~4|8f836da7-3313-4872-b71b-766a5436f506_g9lhrf
1791826876 ~4|8f836da7-3313-4872-b71b-766a5436f506_jrx9ss
1791829436 ~4|bc4849a3-1d3e-42dc-af75-b637f37ad22e_xb98pp
1791807150 ~4|12e1d3d5-2cc8-4e7f-8543-92c56b33f96a_rvelaj
1791807150 ~4|021ef2e7-5bfd-4dfd-8cb3-7047caced20d_py03pb
1791807189 RM_003_ch4vqt
1791829444 ~4|021ef2e7-5bfd-4dfd-8cb3-7047caced20d_yezuyj
1791829444 RM_003_gj2eiv
1791829443 ~4|12e1d3d5-2cc8-4e7f-8543-92c56b33f96a_lxqdiq
1791807197 ASDY4910_r0ea4d
1791807156 ~4|147ac557-131e-4bc4-82fd-81ddec6b9691_qvztgl
1791807187 Tissot_1853_rjtinw
1791807207 ~2|10_35_52_AM_ydjjmk
1791807031 Tissot_1853_2_j8vc3v
1791826875 Tissot_1853_2_rvpqnm
1791807192 Tissot_PRX_2_knoyze
1791807189 Tissot_PRX_cghxqn
1791829455 Tissot_PRX_iygvm8
1791829450 Tissot_PRX_2_rou5iy
1791807177 OGGI7706_krygfd
1791807171 GFUI4637_nalx31
1791807169 HZED1223_v4v5ll
1791807145 EDDB6519_lwah20
1791807093 ~1|03_20_01_PM_vcsero
1791807092 ~1|03_17_47_PM_jukag9
1791807094 ~1|03_18_17_PM_aididm
1791826895 ~1|03_20_01_PM_afg69w
1791829402 ~1|03_18_17_PM_lzgvfg
1791829402 ~1|03_17_47_PM_dmuidr
1791807087 ~1|03_07_50_PM_msyosw
1791807085 ~1|03_10_55_PM_wcmvg4
1791807085 ~1|03_09_02_PM_m6qbqk
1791829412 ~1|03_09_02_PM_ok645j
1791829406 ~1|03_07_50_PM_zeg1y4
1791829405 ~1|03_10_55_PM_zhldjb
1791807082 ~1|03_06_28_PM_p3r2c9
1791807015 ~1|03_05_44_PM_yvkhyk
1791807080 ~1|03_04_08_PM_i3fl3z
1791826876 ~1|03_06_28_PM_l09omv
1791826986 ~1|03_05_44_PM_sx2fbw
1791829394 ~1|03_04_08_PM_bggyjc
1791807078 ~1|02_54_26_PM_voygvx
1791807077 ~1|02_55_14_PM_u91wl5
1791807086 ~1|03_01_31_PM_mtiff8
1791807085 ~1|03_02_23_PM_plmc8s
1791807075 ~1|02_33_33_PM_outsio
1791807072 ~1|02_31_25_PM_tcxt75
1791807075 ~1|02_32_27_PM_ixxo9z
1791807070 ~1|02_13_12_PM_b4npc2
1791807073 ~1|02_26_49_PM_kubbmu
1791807072 ~1|02_25_41_PM_hpzfxr
1791807072 ~1|02_27_46_PM_wynh7q
1791807064 ~1|02_03_20_PM_rip9bk
1791807066 ~1|02_10_15_PM_lnsshm
1791807062 ~1|02_04_17_PM_ilg0uq
1791807066 ~1|02_20_44_PM_gf3jkw
1791807076 ~1|02_23_58_PM_zf25oh
1791807069 ~1|02_22_54_PM_lz5ivx
1791807066 ~1|02_21_27_PM_dynwkh
1791807063 ~1|01_51_10_PM_j7b9zc
1791807057 ~1|01_47_40_PM_ch3yae
1791807062 ~1|01_54_33_PM_e8indi
1791807066 ~1|01_53_01_PM_uwhbvi
1791807052 ~1|01_43_50_PM_isn5pv
1791807060 ~1|01_45_10_PM_z2gz89
1791807053 ~1|01_42_13_PM_jigvxx
1791807056 ~1|01_41_02_PM_isgwfk
1791825719 ~0|04_45_43_PM_xmcuuy
1791825684 ~0|04_40_41_PM_aissyp
1791825678 ~0|04_38_32_PM_vlukn3
1791825674 ~0|04_42_53_PM_hwwvvb
1791825684 ~0|02_57_23_PM_sx3xso
1791825671 ~0|02_55_45_PM_i6qqx6
1791825736 ~0|05_44_44_PM_vw8ff9
1791825652 ~0|03_07_11_PM_iba1qr
1791825712 ~0|05_43_30_PM_nerkcw
1791825673 ~4|cf6b5e02-d06d-48a5-8bc7-c6e1a0a1f77e_z6gdht
1791825652 ~0|03_06_57_PM_qbwpl9
1791825655 ~4|e0a9443f-35a8-4718-9047-11f3df84dbaa_kuowuh
1791825675 ~0|05_42_24_PM_e90sem
1791825706 ~0|05_42_34_PM_twul2i
1791825733 ~0|04_59_39_PM_tvjcm9
1791825724 ~0|04_53_30_PM_cdvnc6
!1791825803 IMG_3351_paligo.mp4
1791825698 ~0|04_52_32_PM_idrn9y
1791825731 ~0|04_48_00_PM_xgi7jt
1791825767 ~0|04_48_52_PM_tea1wc
1791825729 ~0|01_37_34_PM_lp5kz1
1791825760 ~4|5c364d62-9656-4cf3-8c46-5709387ad632_y7lvkk
1791825656 ~0|04_49_50_PM_xjpaua
1791825698 ~0|04_14_47_PM_sb3f1j
1791825749 ~4|0acb0497-c98d-4c9d-98c1-d4168a95204e_ehnxyx
1791825706 ~0|05_35_55_PM_ijeg9a
1791825705 ~0|05_40_03_PM_ufo5as
!1791825771 IMG_3281_yv2aie.mp4
1791825703 ~0|05_38_44_PM_i55are
1791825690 ~0|05_09_16_PM_qb5q7h
1791825702 ~0|05_10_53_PM_ytidrs
!1791825802 IMG_3345_rhukzi.mp4
1791825752 ~0|05_12_42_PM_ymrigl
!1791825797 IMG_3343_hc31md.mp4
1791825706 ~0|04_22_34_PM_bymfob
1791825753 ~0|04_23_59_PM_njecem
1791825723 ~0|04_25_40_PM_nfxjfe
1791825684 ~0|04_28_02_PM_v2rkfp
1791825758 ~0|01_37_48_PM_mm63zr
1791825714 ~4|7c8383f7-7d95-4004-91b3-2cc2c3c884fb_gvoun3
1791825758 ~4|d9f5588a-905f-4f22-a327-05ea5d4ab7a8_hf5euy
1791825764 ~4|1deb0522-8f88-4664-9e8e-94c9ffce34e6_ttq40r
1791825762 ~4|d28dd16d-ff14-41e9-b1ab-cc74c78f03f0_vh3s2f
1791825680 ~0|01_50_17_PM_tmdraa
1791825665 ~0|01_52_09_PM_xlpoba
!1791825650 IMG_3354_ajec8l.mp4
1791825680 ~0|01_53_41_PM_qcgriu
1791825688 ~0|05_54_44_PM_kgcsxk
1791825760 ~0|05_56_06_PM_fhakig
1791825736 ~0|05_57_47_PM_mqocfr
1791825683 ~0|02_39_40_PM_vamlns
1791825669 ~0|02_37_29_PM_dzcatb
!1791825773 IMG_3287_c4vhnm.mp4
1791825693 ~0|02_38_19_PM_yqpbwj
1791825756 ~0|02_29_43_PM_zpkzj7
1791825703 ~0|04_58_10_PM_ytykkn
1791825674 ~0|05_26_20_PM_vlmqhw
1791825724 ~0|05_21_50_PM_ahalyg
1791825734 ~0|05_34_40_PM_dgelki
1791825702 ~0|05_34_45_PM_qiu8wo
1791825736 ~0|02_59_52_PM_fupw1d
1791825697 ~0|03_01_43_PM_khtzbe
1791825758 ~4|de6b26d3-14fc-49f7-99e4-00c51b539dea_r2nven
1791825756 ~4|781a1b7a-3a1a-4749-8625-ae9b26b7825b_axoim6
1791825768 ~4|b3fe7bcc-3c37-4121-9845-df581dff75eb_mz4zni
1791825753 ~4|f3c93b3a-6952-4088-bbbe-e4f43c242480_jnkpp8
1791825753 ~4|53f5178b-8b37-40e4-968a-9af26b420b75_bmk2ha
1791825707 ~4|72ee2097-58fe-42e8-a5eb-27576f9f99d8_i7byo8
1791825655 ~0|01_01_47_PM_zglrci
1791825676 ~0|01_01_52_PM_lrtctk
1791825649 ~0|01_03_56_PM_a7ob4y
1791825766 ~0|02_36_36_PM_yp5oyt
1791825735 ~0|02_35_34_PM_uxcc6t
1791825720 ~0|02_36_41_PM_gajt9j
1791825740 ~4|3ddcc750-c34f-4508-b2c9-fd3c4889fe28_ouzluc
1791825729 ~4|d2c09fe1-3196-45f4-babd-1f9da0aeb0eb_fqckfn
1791825750 ~4|15f6934d-6452-4bd5-957e-05d94d159b69_jsbxvd
1791825692 ~0|01_08_31_PM_osmrbm
1791825748 ~0|01_11_32_PM_mdkjia
1791825676 ~0|01_13_51_PM_moowqf
1791825650 ~0|01_17_26_PM_dlwibt
1791825687 ~0|02_47_43_PM_oiqfyc
1791825747 ~0|02_50_13_PM_jkf67b
1791825695 ~0|02_51_42_PM_e2yfga
1791825666 ~0|02_02_39_PM_jzuitn
1791825744 ~0|02_06_29_PM_vuvlah
1791825692 ~0|02_06_21_PM_vo3rc2
1791825655 ~0|01_28_45_PM_azfomc
1791825718 ~0|01_56_16_PM_dzpbra
1791825711 ~0|02_00_30_PM_tgfbae
1791825690 ~0|01_58_35_PM_jztuqy
1791825685 ~0|01_58_31_PM_ad8xa3
1791825680 ~0|01_30_57_PM_kgdq88
1791825729 ~0|01_33_49_PM_pl5qaw
1791825665 ~0|01_34_56_PM_cxknhv
1791825657 ~0|01_33_54_PM_yy4tmd
1791825722 ~0|04_34_33_PM_n8ygn1
1791825672 ~0|04_30_40_PM_wiwjxg
1791825469 ~0|12_51_54_PM_gtjt3l
1791825714 ~0|01_24_50_PM_yiixpm
1791825696 ~0|01_22_26_PM_rgz91q
1791825651 ~0|01_24_54_PM_mhe0zj
1791825715 ~0|02_29_33_PM_uiufcd
1791825735 ~0|02_29_47_PM_jfuiz3
1791825678 ~0|05_50_46_PM_pehmba
1791825729 ~0|05_49_32_PM_h3joku
1791825658 ~0|05_48_15_PM_rcir86
1791825654 ~0|05_47_33_PM_infbx0
1791825729 ~0|01_29_28_PM_k2sfme
1791825678 ~0|01_28_55_PM_dfsoow
1791825676 ~0|04_36_29_PM_ar6reu
1791825688 ~0|12_49_19_PM_ewpj1s
1791825711 ~0|12_51_49_PM_l6b9zj
1791825671 ~0|04_32_59_PM_weqmwq
1791825686 ~0|05_46_30_PM_dzplbj
1791825726 ~0|05_53_33_PM_hkdyqm
1791825691 ~0|01_01_30_PM_wvjljp
1791825718 ~0|02_14_44_PM_dazphh
1791825735 ~0|02_16_37_PM_wpwpt0
1791825662 ~4|3e9e6d44-8f97-4bdd-9c51-5ecc3dae4b38_v4fch6
1791825699 ~0|02_44_44_PM_xvyv3u
1791825695 ~0|02_44_18_PM_z2pggc
1791825693 ~0|02_44_07_PM_aiuwrv
1791825682 ~0|04_10_17_PM_zof4qf
1791825698 ~0|04_13_31_PM_pvogzg
1791825671 ~0|04_11_33_PM_qllocm
1791825670 ~0|02_08_26_PM_aks6xc
1791825697 ~0|02_11_54_PM_xkmpxy
1791825681 ~0|02_10_04_PM_gwmgb3
1791825688 ~4|b664e85c-3215-404d-bb0b-49ecb352719f_gjryfa
1791825651 ~0|01_43_35_PM_wktzqi
1791825678 ~0|01_44_54_PM_rzjx4o
1791825650 ~0|01_47_27_PM_m2x1l6
1791825652 ~0|02_20_22_PM_npcu5p
1791825667 ~0|02_25_17_PM_ya75lv
1791825666 ~0|02_21_13_PM_jp5pxp
1791554548 ChatGPT_Image_Oct_9_2026_06_00_51_AM_qn4vfj
1791554546 ~3|03_27_19_AM_w2ccrh
1791554545 ChatGPT_Image_Oct_9_2026_06_01_59_AM_yijk6g
1791554543 ~3|03_26_31_AM_vubfkn
1791554529 ~3|03_28_05_AM_qjfbe9
1791554527 ~3|03_25_56_AM_lb33hr
1791554519 ChatGPT_Image_Oct_9_2026_06_00_25_AM_uhxf2b
1791554547 ~3|03_22_50_AM_uh1nvb
1791554546 ~3|03_20_51_AM_i2uck5
1791554509 ~3|03_24_46_AM_zjaprp
1791554489 ~3|03_17_02_AM_j06vxy
1791554489 ~3|03_23_26_AM_qjysal
1791554547 ~3|03_53_56_AM_u8j2em
1791554494 ~3|03_52_29_AM_hwvkkl
1791554493 ~3|03_52_43_AM_qqhsxu
1791554462 ~3|03_54_42_AM_osx3re
1791554543 download_t4mwnu
1791554457 ChatGPT_Image_Oct_9_2026_05_43_51_AM_tzmekj
1791554456 ChatGPT_Image_Oct_9_2026_05_44_07_AM_zhfal7
1791554456 ChatGPT_Image_Oct_9_2026_05_44_01_AM_rakcxi
1791554546 ~3|03_31_25_AM_adneox
1791554542 ~3|03_31_25_AM_lezv6e
1791554541 ~3|03_05_57_AM_jotlml
1791554533 ~3|03_05_57_AM_aqbexg
1791554532 ~3|03_05_57_AM_i67eud
1791554527 ~3|03_11_59_AM_vfuqyq
1791554521 ~3|03_11_59_AM_qdekmp
1791554521 ~3|03_11_59_AM_pf9qvt
1791554493 ~3|03_08_28_AM_eadgzi
1791554490 ~3|03_08_28_AM_com1wu
1791554486 ~3|03_08_28_AM_w1cmne
1791554540 ~3|05_14_55_AM_mmeeke
1791554524 ~3|05_12_38_AM_qu3rwg
1791554523 ~3|05_13_35_AM_gjl6ug
1791554497 ~3|05_02_14_AM_dmqgtn
1791554495 ~3|05_00_58_AM_fopchl
1791554540 ~3|04_18_11_AM_wmrwer
1791554537 ~3|04_14_21_AM_y0fpsd
1791554477 ~3|04_15_14_AM_zgrf9y
1791554463 ~3|04_13_35_AM_yh9oxt
1791554539 ChatGPT_Image_Oct_9_2026_06_32_54_AM_krgqhv
1791554468 ChatGPT_Image_Oct_9_2026_06_33_10_AM_iz7pyu
1791554467 ChatGPT_Image_Oct_9_2026_06_40_36_AM_xefpyk
1791554537 ~3|03_46_36_AM_uwpzca
1791554533 ~3|03_33_53_AM_hz1bql
1791554524 ~3|03_32_41_AM_wvqvn7
1791554514 ~3|03_48_15_AM_lbhjxq
1791554512 ~3|03_45_10_AM_plovxw
1791554537 ~3|04_01_00_AM_fzcsmj
1791554493 ~3|03_57_15_AM_aecnit
1791554477 ~3|03_58_02_AM_gkil8b
1791554463 ~3|03_59_44_AM_yrfx0f
1791554536 ~4|69f6e04f-40b1-40c7-9046-cce8e78f660e_ncixjl
1791554515 ~4|1f72a118-fb8a-4d81-8455-6a8bc978ef95_hu6zey
1791554482 ~4|c24aa495-5099-4b35-a543-57066814c52f_ompylf
1791554532 ChatGPT_Image_Oct_9_2026_05_34_55_AM_nl0lh5
1791554518 ChatGPT_Image_Oct_9_2026_05_32_52_AM_mreu4b
1791554500 ChatGPT_Image_Oct_9_2026_05_34_01_AM_rehbpb
1791554485 ChatGPT_Image_Oct_9_2026_05_31_32_AM_p74lui
1791554532 ChatGPT_Image_Oct_9_2026_05_14_11_AM_gqanu6
1791554521 ChatGPT_Image_Oct_9_2026_05_12_58_AM_t9bqmj
1791554482 ChatGPT_Image_Oct_9_2026_05_13_12_AM_e1pijg
1791554529 ~4|8acaf730-be4a-4fd5-9d3c-140c0bd7893e_utfcwy
1791554517 ChatGPT_Image_Oct_9_2026_05_54_30_AM_j8ctsi
1791554516 ChatGPT_Image_Oct_9_2026_05_52_10_AM_gnltla
1791554529 ChatGPT_Image_Oct_9_2026_05_07_51_AM_vifleo
1791554496 ChatGPT_Image_Oct_9_2026_05_06_08_AM_zakpp4
1791554480 ChatGPT_Image_Oct_9_2026_05_04_22_AM_ftv7iu
1791554527 ChatGPT_Image_Oct_9_2026_04_10_13_AM_nqkf8w
1791554510 ~4|ba1a3230-abb6-4a27-85c8-72c9e79d3f4b_ygu4gp
1791554476 ChatGPT_Image_Oct_9_2026_04_10_02_AM_yscj4e
1791554525 ~4|e1e8b78f-58be-474a-8127-cf71d3907f0b_effxa2
1791554501 ~4|05b483e9-a412-49ae-8e7f-a17988769703_ob7wpk
1791554501 ~4|db13ee37-70b4-4081-ab05-119d1fa55177_lgorhb
1791554473 ~4|5bae0b63-f5a5-4286-bce5-64711d17df75_obvuk3
1791554525 ~3|04_10_21_AM_lyfp2w
1791554496 ~3|04_02_44_AM_hdey5d
1791554464 ~3|04_01_56_AM_ao7m2s
1791554460 ~3|04_08_52_AM_txc6q6
1791554479 ~3|04_03_56_AM_y6ikbm
1791554521 ChatGPT_Image_Oct_9_2026_06_41_52_AM_cfhq3s
1791554508 ChatGPT_Image_Oct_9_2026_06_43_12_AM_x7ljel
1791554485 ChatGPT_Image_Oct_9_2026_06_44_00_AM_vldxpg
1791554473 ChatGPT_Image_Oct_9_2026_06_43_38_AM_txlelu
1791554520 ChatGPT_Image_Oct_9_2026_06_34_41_AM_zvjltg
1791554519 ~4|edb8d939-1db5-4aaa-bc2c-0d6668bed252_trrj74
1791554517 ~3|05_20_42_AM_uoxxvj
1791554501 ~3|05_22_52_AM_qyijt5
1791554480 ~3|05_18_30_AM_vxja7d
1791554474 ChatGPT_Image_Oct_9_2026_03_46_51_AM_e0erzv
1791554471 ~3|05_17_29_AM_zsnvkm
1791554467 ChatGPT_Image_Oct_9_2026_03_47_44_AM_chl5hk
1791554462 ChatGPT_Image_Oct_9_2026_03_47_36_AM_yqsrlc
1791554459 ChatGPT_Image_Oct_9_2026_03_47_29_AM_zuqg69
1791554510 ChatGPT_Image_Oct_9_2026_06_22_04_AM_jdvktj
1791554502 ChatGPT_Image_Oct_9_2026_06_18_03_AM_xwlvvp
1791554474 ChatGPT_Image_Oct_9_2026_06_21_44_AM_haocbn
1791554511 ChatGPT_Image_Oct_9_2026_06_28_20_AM_jszjwc
1791554509 ChatGPT_Image_Oct_9_2026_06_27_30_AM_jmchua
1791554488 ChatGPT_Image_Oct_9_2026_06_26_06_AM_ja3zzz
1791554505 ChatGPT_Image_Oct_9_2026_06_18_58_AM_goq3nw
1791554475 ~4|d0e4e1c0-c242-46e8-8cd1-08486802ffdc_xy359r
1791554460 ~4|e06f212c-ab2a-4c06-96f6-022770e27503_v15hyy
1791554458 ~4|bccd2330-accd-472b-9aae-4b5e5563f7cb_iay7ha
1791554502 ChatGPT_Image_Oct_9_2026_05_47_14_AM_xgqwhe
1791554464 ChatGPT_Image_Oct_9_2026_05_47_59_AM_hjl3k4
1791554489 ChatGPT_Image_Oct_9_2026_03_56_28_AM_rlt8q2
1791554471 ChatGPT_Image_Oct_9_2026_03_57_08_AM_kacz38
1791554469 ChatGPT_Image_Oct_9_2026_03_57_58_AM_gvnvaz
1791554469 ChatGPT_Image_Oct_9_2026_03_59_02_AM_akm8ay
1791554472 ChatGPT_Image_Oct_9_2026_04_02_13_AM_gw0uhp
1791554471 ChatGPT_Image_Oct_9_2026_04_02_08_AM_dz6hcy
1791554461 ChatGPT_Image_Oct_9_2026_04_00_10_AM_v8rhbq
1791554488 ChatGPT_Image_Oct_9_2026_03_51_36_AM_ubbiz7
1791554480 ChatGPT_Image_Oct_9_2026_03_50_49_AM_iisivj
1791554468 ChatGPT_Image_Oct_9_2026_03_50_04_AM_ywliwk
1791554485 ChatGPT_Image_Oct_9_2026_05_47_04_AM_ysvr2h
1791554484 ChatGPT_Image_Oct_9_2026_06_07_31_AM_osylae
1791554458 ChatGPT_Image_Oct_9_2026_06_08_54_AM_rv4ckk
1791554458 ~4|f62f8f14-e666-4117-acd7-0df1f4a05f66_hn5emh
1791554457 ChatGPT_Image_Oct_9_2026_06_07_21_AM_nxrv7x
1791554481 ChatGPT_Image_Oct_9_2026_04_50_00_AM_yljruu
1791554479 ChatGPT_Image_Oct_9_2026_04_52_57_AM_lscox0
1791554466 ChatGPT_Image_Oct_9_2026_04_33_13_AM_mnrc7w
1791554477 ChatGPT_Image_Oct_9_2026_04_21_24_AM_rktw8q
1791554470 ~3|04_13_22_AM_lixctt
1791554462 ChatGPT_Image_Oct_9_2026_04_13_41_AM_kbtkpg
1791554462 ChatGPT_Image_Oct_9_2026_04_13_58_AM_p92mag
1791554460 ChatGPT_Image_Oct_9_2026_04_18_53_AM_or1ot2
1791554466 ChatGPT_Image_Oct_9_2026_06_12_25_AM_lavcnb
1791554465 ChatGPT_Image_Oct_9_2026_06_12_35_AM_zrwl6x
1791554465 ChatGPT_Image_Oct_9_2026_06_13_49_AM_a36rp7
1791554459 ChatGPT_Image_Oct_9_2026_06_14_18_AM_jwrqwx
1791554473 ChatGPT_Image_Oct_9_2026_03_53_21_AM_xgfkfh
1791554459 ChatGPT_Image_Oct_9_2026_03_53_59_AM_clzypi`;

const assetUrls = assetRows.split('\n').map(row => {
  const video = row.startsWith('!');
  if (video) row = row.slice(1);

  const space = row.indexOf(' ');
  const version = row.slice(0, space);
  const id = row.slice(space + 1).replace(
    /^~(\d+)\|/,
    (_, n) => prefixes[Number(n)]
  );

  return cloud + (video ? 'video' : 'image') +
    '/upload/v' + version + '/' + id;
});

const watchDefaults = {
  "category": "Watches",
  "subcategory": "Luxury watch",
  "brand": "BUYYMEE.com",
  "priceOnRequest": false,
  "compareAt": null,
  "currency": "USD",
  "sizes": ["OS"],
  "inStock": true,
  "placeholder": false,
  "sale": false
};

const sneakerDefaults = {
  "productCode": "00000",
  "category": "Sneakers",
  "brand": "BUYYMEE.com",
  "price": null,
  "priceOnRequest": true,
  "compareAt": null,
  "currency": "USD",
  "description": "Footwear from the BUYYMEE.com collection. Contact us for available sizes and price.",
  "sizes": [],
  "inStock": true,
  "placeholder": false,
  "featured": false,
  "sale": false
};

const families = {
  1:{"kind":"W","slug":"audemars-piguet-royal-oak-offshore-diver-15720st","familyName":"Audemars Piguet Royal Oak Offshore Diver 15720ST Style","productCode":"AP001","price":520,"description":"A considered dive-watch silhouette with a bold presence and precise detailing.","tags":["watch","luxury","audemars"],"featured":true,"newArrival":true},
  2:{"kind":"W","slug":"richard-mille-rm-65-01-style-skeleton-automatic","familyName":"Richard Mille RM 65-01 Style Skeleton Automatic Watch","productCode":"RM002","price":580,"description":"A dramatic skeleton-style automatic watch with a technical, architectural character.","tags":["watch","luxury","skeleton"],"featured":true,"newArrival":true},
  3:{"kind":"W","slug":"tissot-1853-chronograph-silver","familyName":"Tissot 1853 Chronograph","productCode":"TT004","price":460,"description":"A considered watch from the BUYYMEE.com edit.","tags":["watch","luxury"],"featured":true,"newArrival":false},
  4:{"kind":"W","slug":"patek-philippe-calatrava-silver-bronze","familyName":"Patek Philippe Calatrava","productCode":"PP001","price":600,"description":"A considered watch from the BUYYMEE.com edit.","tags":["watch","luxury"],"featured":true,"newArrival":false},
  23:{"kind":"W","slug":"hublot-spirit-of-big-bang-white-ceramic-42mm-ref-642-hx-0170-rx","familyName":"Hublot Spirit of Big Bang","productCode":"HL009","price":560,"description":"Hublot Spirit of Big Bang White Ceramic 42mm — Ref. 642.HX.0170.RX.","tags":["watch","luxury","hublot","white ceramic"],"featured":true,"newArrival":true},
  6:{"kind":"W","slug":"omega-constellation-co-axial-master-chronometer-41","familyName":"OMEGA Constellation Co-Axial Master Chronometer 41 mm","productCode":"00000","price":490,"description":"A considered watch from the BUYYMEE.com edit.","tags":["watch","luxury"],"featured":true,"newArrival":false},
  7:{"kind":"W","slug":"tissot-prc-200-chronograph","familyName":"Tissot 1853 Chronograph","productCode":"TT002","price":430,"description":"A considered watch from the BUYYMEE.com edit.","tags":["watch","luxury"],"featured":true,"newArrival":false},
  8:{"kind":"W","slug":"cartier-santos-de-cartier-chronograph","familyName":"Hublot Bracelet Watch","productCode":"00000","price":570,"description":"Hublot bracelet wristwatch, available in black and silver / white.","tags":["watch","luxury","hublot"],"featured":true,"newArrival":false},
  9:{"kind":"W","slug":"omega-de-ville-prestige-quartz","familyName":"Omega De Ville","productCode":"00000","price":445,"description":"A considered watch from the BUYYMEE.com edit.","tags":["watch","luxury"],"featured":true,"newArrival":false},
  10:{"kind":"W","slug":"tissot-1853-chronograph-silver-royal-blue","familyName":"Tissot 1853 Chronograph","productCode":"TT001","price":475,"description":"A considered watch from the BUYYMEE.com edit.","tags":["watch","luxury"],"featured":true,"newArrival":false},
  11:{"kind":"W","slug":"richard-mille","familyName":"Richard Mille","productCode":"RM004","price":590,"description":"A considered watch from the BUYYMEE.com edit.","tags":["watch","luxury"],"featured":true,"newArrival":false},
  12:{"kind":"W","slug":"hublot-black","familyName":"Hublot Vendome Collection","productCode":"HL007","price":510,"description":"A considered watch from the BUYYMEE.com edit.","tags":["watch","luxury"],"featured":true,"newArrival":false},
  14:{"kind":"W","slug":"breitlin-1884","familyName":"BREITLIN 1884","productCode":"BL001","price":425,"description":"A considered watch from the BUYYMEE.com edit.","tags":["watch","luxury"],"featured":true,"newArrival":false},
  32:{"kind":"W","slug":"lamborghini-wrist-watch-blue","familyName":"Tonino Lamborghini","productCode":"LAMBO001","price":550,"description":"A blue Lamborghini-inspired wrist watch with a bold automotive character and a sharp, sporty presence.","tags":["watch","luxury","lamborghini","blue"],"featured":true,"newArrival":true},
  24:{"kind":"W","slug":"audemars-piguet-royal-oak-offshore-selfwinding-chronograph","familyName":"Audemars Piguet Royal Oak Offshore Selfwinding Chronograph","productCode":"AP002","price":580,"description":"A considered watch from the BUYYMEE.com edit.","tags":["watch","luxury","audemars"],"featured":true,"newArrival":true},
  25:{"kind":"W","slug":"mercedeez-benz-wrist-watch","familyName":"Mercedez Benz SLS","productCode":"MB001","price":500,"description":"A considered watch from the BUYYMEE.com edit.","tags":["watch","luxury","mercedes benz"],"featured":true,"newArrival":true},
  26:{"kind":"W","slug":"iwc-schaffhausen-portugieser","familyName":"IWC Schaffhausen Portugieser","productCode":"HL005","price":540,"description":"A considered watch from the BUYYMEE.com edit.","tags":["watch","luxury","iwc"],"featured":true,"newArrival":true},
  27:{"kind":"W","slug":"hublot-big-bang-vendome-paris-boutique-special-edition-red-magic-chronograph","familyName":"Hublot Big Bang Vendôme Paris Boutique Special Edition “Red Magic” Chronograph","productCode":"HL005","price":550,"description":"A considered watch from the BUYYMEE.com edit.","tags":["watch","luxury","hublot"],"featured":true,"newArrival":true},
  28:{"kind":"W","slug":"hublot-classic-fusion-chronograph-titanium","familyName":"Hublot Classic Fusion Chronograph Titanium","productCode":"HL006","price":525,"description":"A considered watch from the BUYYMEE.com edit.","tags":["watch","luxury","hublot"],"featured":true,"newArrival":true},
  29:{"kind":"W","slug":"omega-seamaster-diver-300m-co-axial-master","familyName":"OMEGA Seamaster Diver 300M Co‑Axial Master","productCode":"000","price":500,"description":"A considered watch from the BUYYMEE.com edit.","tags":["watch","luxury","omega"],"featured":true,"newArrival":true},
  30:{"kind":"W","slug":"richard-mille-rm-11-03-automatic-flyback","familyName":"Richard Mille RM 11-03 Automatic Flyback","productCode":"RM009","price":590,"description":"A considered watch from the BUYYMEE.com edit.","tags":["watch","luxury","richard mille"],"featured":true,"newArrival":true},
  31:{"kind":"W","slug":"hublot-inspired-skeleton-flyback-chronograph","familyName":"Richard Mille Skeleton Chronograph — Blue","productCode":"00000","price":560,"description":"Blue-dial Richard Mille skeleton chronograph from the BUYYMEE.com watch collection.","tags":["watch","luxury","richard mille","skeleton chronograph"],"featured":true,"newArrival":true},
  34:{"kind":"W","slug":"omega-seamaster-green-chronograph","familyName":"OMEGA Seamaster Chronograph — Green","productCode":"00000","price":500,"description":"Wristwatch from the BUYYMEE.com collection.","tags":["watch","luxury"],"featured":false,"newArrival":true},
  35:{"kind":"W","slug":"tissot-1853-gold-dial","familyName":"Tissot 1853 — Gold Dial","productCode":"00000","price":500,"description":"Wristwatch from the BUYYMEE.com collection.","tags":["watch","luxury"],"featured":false,"newArrival":true},
  36:{"kind":"W","slug":"tissot-prx-green","familyName":"Tissot PRX — Green","productCode":"00000","price":500,"description":"Wristwatch from the BUYYMEE.com collection.","tags":["watch","luxury"],"featured":false,"newArrival":true},
  37:{"kind":"W","slug":"hublot-black-round-skeleton-chronograph","familyName":"Hublot Skeleton Chronograph — Black","productCode":"00000","price":500,"description":"Wristwatch from the BUYYMEE.com collection.","tags":["watch","luxury"],"featured":false,"newArrival":true},
  38:{"kind":"W","slug":"blue-square-skeleton-chronograph","familyName":"Blue Square Skeleton Chronograph","productCode":"00000","price":500,"description":"Wristwatch from the BUYYMEE.com collection.","tags":["watch","luxury"],"featured":false,"newArrival":true},
  39:{"kind":"W","slug":"hublot-blue-skeleton-chronograph","familyName":"Hublot Skeleton Chronograph — Light Blue","productCode":"00000","price":500,"description":"Wristwatch from the BUYYMEE.com collection.","tags":["watch","luxury"],"featured":false,"newArrival":true},
  40:{"kind":"W","slug":"emporio-armani-chronograph","familyName":"Emporio Armani Chronograph","productCode":"00000","price":500,"description":"Wristwatch from the BUYYMEE.com collection.","tags":["watch","luxury"],"featured":false,"newArrival":true},
  41:{"kind":"W","slug":"diesel-green-chronograph","familyName":"Diesel Chronograph — Olive Green","productCode":"00000","price":500,"description":"Wristwatch from the BUYYMEE.com collection.","tags":["watch","luxury"],"featured":false,"newArrival":true},
  42:{"kind":"W","slug":"tag-heuer-carrera-chronograph","familyName":"Carrera Cal 1887","productCode":"CR7","price":500,"description":"Wristwatch from the BUYYMEE.com collection.","tags":["watch","luxury"],"featured":false,"newArrival":true},
  43:{"kind":"W","slug":"orange-strap-racing-chronograph","familyName":"TAG Heuer Grand Carrera Racing Chronograph","productCode":"00000","price":500,"description":"Wristwatch from the BUYYMEE.com collection.","tags":["watch","luxury"],"featured":false,"newArrival":true},
  44:{"kind":"W","slug":"tag-heuer-blue-skeleton-chronograph","familyName":"TAG Heuer Carrera Skeleton Chronograph — Blue","productCode":"00000","price":500,"description":"Wristwatch from the BUYYMEE.com collection.","tags":["watch","luxury"],"featured":false,"newArrival":true},
  45:{"kind":"W","slug":"boss-orange-chronograph","familyName":"BOSS Chronograph — Orange","productCode":"00000","price":500,"description":"Wristwatch from the BUYYMEE.com collection.","tags":["watch","luxury"],"featured":false,"newArrival":true},
  47:{"kind":"S","slug":"nike-air-force-1-latest","familyName":"Nike Air Force 1","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  48:{"kind":"S","slug":"nike-textured-black-low-top","familyName":"Nike Textured Low-Top Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  49:{"kind":"S","slug":"nike-mesh-black-runners","familyName":"Nike Mesh Running Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  50:{"kind":"S","slug":"nike-air-max-panelled","familyName":"Nike Air Max Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  51:{"kind":"S","slug":"nike-black-bubble-sole","familyName":"Nike Bubble-Sole Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  52:{"kind":"S","slug":"nike-air-max-plus-latest","familyName":"Nike Air Max Plus Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  53:{"kind":"S","slug":"black-mesh-sports-sneakers","familyName":"Black Mesh Sports Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  54:{"kind":"S","slug":"jordan-black-grey-high-top","familyName":"Jordan High-Top Sneakers — Black / Grey","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  55:{"kind":"S","slug":"jordan-patent-high-top-latest","familyName":"Jordan Patent High-Top Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  56:{"kind":"S","slug":"nike-green-yellow-basketball","familyName":"Nike Basketball Sneakers — Green / Yellow","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  57:{"kind":"S","slug":"off-white-black-low-top","familyName":"Off-White Low-Top Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  58:{"kind":"S","slug":"jordan-1-low-latest","familyName":"Jordan 1 Low Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  59:{"kind":"S","slug":"knit-sneakers-latest","familyName":"Knit Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  60:{"kind":"S","slug":"birkenstock-lined-clogs","familyName":"Birkenstock Lined Clogs","subcategory":"Clogs","tags":["footwear","sneakers","clogs"],"newArrival":true},
  61:{"kind":"S","slug":"adidas-cream-running","familyName":"Adidas Running Sneakers — Cream","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  62:{"kind":"S","slug":"nike-green-white-runners","familyName":"Nike Running Sneakers — Green / White","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  63:{"kind":"S","slug":"monogram-white-navy-low-top","familyName":"Monogram Low-Top Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  64:{"kind":"S","slug":"adidas-classic-low-top-latest","familyName":"Adidas Low-Top Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  65:{"kind":"S","slug":"jordan-3-white-blue","familyName":"Jordan 3 Sneakers — White / Blue","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  66:{"kind":"S","slug":"jordan-4-latest","familyName":"Jordan 4 Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  67:{"kind":"S","slug":"nike-white-air-cushioned","familyName":"Nike Air-Cushioned Sneakers — White","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  68:{"kind":"S","slug":"balenciaga-black-sock-trainers","familyName":"Balenciaga Sock Trainers","subcategory":"Sock trainers","tags":["footwear","sneakers","sock trainers"],"newArrival":true},
  69:{"kind":"S","slug":"black-studded-lug-boots","familyName":"Black Studded Lug-Sole Boots","subcategory":"Boots","tags":["footwear","sneakers","boots"],"newArrival":true},
  70:{"kind":"S","slug":"nike-white-wave-runners","familyName":"Nike Running Sneakers — White / Silver","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  71:{"kind":"S","slug":"alexander-mcqueen-white-black","familyName":"Alexander McQueen Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  72:{"kind":"S","slug":"cream-knit-slip-on-shoes","familyName":"Cream Knit Slip-On Shoes","subcategory":"Slip-ons","tags":["footwear","sneakers","slip-ons"],"newArrival":true},
  73:{"kind":"S","slug":"nike-beige-pale-blue","familyName":"Nike Sneakers — Beige / Pale Blue","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  74:{"kind":"S","slug":"converse-black-white-low-top","familyName":"Converse Low-Top Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":true},
  75:{"kind":"S","slug":"lv-crystal-blue-trainers","familyName":"Louis Vuitton Crystal Monogram Trainers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  76:{"kind":"S","slug":"lv-denim-red-lace-trainers","familyName":"Louis Vuitton Denim Trainers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  77:{"kind":"S","slug":"lv-black-white-monogram-trainers","familyName":"Louis Vuitton Monogram Trainers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  78:{"kind":"S","slug":"bape-black-white-star-sneakers","familyName":"BAPE Star Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  79:{"kind":"S","slug":"lv-blue-white-trainers","familyName":"Louis Vuitton Trainers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  80:{"kind":"S","slug":"lv-green-white-panelled-trainers","familyName":"Louis Vuitton Panelled Trainers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  81:{"kind":"S","slug":"lv-green-logo-low-top","familyName":"Louis Vuitton Logo Low-Top Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  82:{"kind":"S","slug":"nike-grey-black-air-max","familyName":"Nike Air Max Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  83:{"kind":"S","slug":"lv-mint-coral-trainers","familyName":"Louis Vuitton Trainers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  84:{"kind":"S","slug":"lv-pastel-trainers","familyName":"Louis Vuitton Trainers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  85:{"kind":"S","slug":"adidas-cream-pink-low-top","familyName":"Adidas Low-Top Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  86:{"kind":"S","slug":"nike-black-teal-air-max","familyName":"Nike Air Max Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  87:{"kind":"S","slug":"yeezy-700-black","familyName":"Yeezy 700 Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  88:{"kind":"S","slug":"golden-goose-brown-star","familyName":"Golden Goose Star Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  89:{"kind":"S","slug":"yeezy-black-knit","familyName":"Yeezy Knit Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  90:{"kind":"S","slug":"nike-black-lug-low-top","familyName":"Nike Lug-Sole Low-Top Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  91:{"kind":"S","slug":"jordan-3-midnight-navy","familyName":"Jordan 3 Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  92:{"kind":"S","slug":"lv-orange-white-low-top","familyName":"Louis Vuitton Low-Top Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  93:{"kind":"S","slug":"rick-owens-green-high-top","familyName":"Rick Owens High-Top Shoes","subcategory":"High-tops","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  94:{"kind":"S","slug":"nike-black-grey-low-top-older","familyName":"Nike Low-Top Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  95:{"kind":"S","slug":"golden-goose-white-script","familyName":"Golden Goose Low-Top Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  96:{"kind":"S","slug":"lv-grey-orange-trainers","familyName":"Louis Vuitton Trainers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  97:{"kind":"S","slug":"nike-cream-grey-air-max","familyName":"Nike Air Max Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  98:{"kind":"S","slug":"nike-navy-air-max-plus","familyName":"Nike Air Max Plus Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  99:{"kind":"S","slug":"puma-grey-chunky","familyName":"Puma Chunky Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  100:{"kind":"S","slug":"rick-owens-black-high-top","familyName":"Rick Owens High-Top Shoes","subcategory":"High-tops","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  101:{"kind":"S","slug":"lv-purple-white-trainers","familyName":"Louis Vuitton Trainers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  102:{"kind":"S","slug":"lv-light-blue-trainers","familyName":"Louis Vuitton Trainers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  103:{"kind":"S","slug":"lv-purple-trainers","familyName":"Louis Vuitton Trainers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  104:{"kind":"S","slug":"converse-black-high-top","familyName":"Converse High-Top Sneakers","subcategory":"High-tops","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  105:{"kind":"S","slug":"nike-khaki-black-low-top","familyName":"Nike Low-Top Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  106:{"kind":"S","slug":"lv-white-grey-trainers","familyName":"Louis Vuitton Trainers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  107:{"kind":"S","slug":"lv-white-green-patterned","familyName":"Louis Vuitton Patterned Low-Top Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  108:{"kind":"S","slug":"nike-blue-purple-low-top","familyName":"Nike Low-Top Sneakers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false},
  109:{"kind":"S","slug":"lv-blue-purple-trainers","familyName":"Louis Vuitton Trainers","subcategory":"Sneakers","tags":["footwear","sneakers","sneakers"],"newArrival":false}
};

const cardRows = [
  [1,1,"Blue",[0,1,2,3,4]],
  [1,110,"Green",[5,6,7,8,9]],
  [2,2,"Black",[10,11,12,13,14,15,16,17,18,19,20]],
  [3,3,"Silver",[21,22,23,24,25,26]],
  [4,4,"White Baton Dial / Rose Gold",[27,28,29,30,31]],
  [4,111,"Black / Gold",[32,33]],
  [4,112,"White Roman Dial / Rose Gold",[34,35,36,29]],
  [23,23,"White Ceramic",[37,38,39,40,41,42,43]],
  [23,113,"Blue",[44,45,46,47,48,49]],
  [6,6,"Red",[50,51,52,53]],
  [6,114,"Silver / Gold",[54]],
  [7,7,"Black / Rose Gold",[55,56,57,58,59,60,61,62,63,64]],
  [8,8,"Black",[65,66,67,68,69,70,71,72]],
  [8,115,"Silver / White",[73,74,75,76,77,78]],
  [9,9,"Black / Gold",[79]],
  [9,116,"Silver / Gold",[80]],
  [9,117,"White Crystal-Marker Dial / Gold",[81],{"name":"Omega Quartz — White Crystal-Marker Dial / Gold","familyName":"Omega Quartz"}],
  [10,10,"Silver / Royal Blue",[82,83,84,85,86,87,88,89,90,91]],
  [11,11,"Silver / Royal Blue",[92,93,94,95]],
  [12,12,"Silver / Black",[96,97,98,99,100,101,102,103,104,105,106,107]],
  [14,14,"Silver / Blue",[108,109,110,111,112,113]],
  [32,32,"Blue",[114,115,116,117,118,119,120,121]],
  [32,118,"Black",[122,123,124,125,126,127,128,129]],
  [24,24,"Blue",[130,131,132]],
  [25,25,"Blue",[133,134,135,136]],
  [25,119,"Black",[137,138,139]],
  [26,26,"Brown",[140,141,142,143,144,145]],
  [27,27,"Light Brown",[146,147,148,149,150]],
  [27,120,"Black",[151,152,153,154,155,156,157,158]],
  [28,28,"Green",[159,160,161,162,163,164]],
  [28,121,"Blue",[165,166,167,168,169,170]],
  [29,29,"Green",[171,172]],
  [30,30,"Blue",[173,174,175,176]],
  [31,31,"Blue / Black",[177,178,179,180,181,182]],
  [34,34,"Green / Silver",[183,184]],
  [35,35,"Gold / Silver",[185,186,187,188]],
  [36,36,"Green / Silver",[189,190,191,192]],
  [37,37,"Black",[193]],
  [38,38,"Blue",[194]],
  [39,39,"Light Blue",[195,196]],
  [40,40,"Grey / White",[197,198,199,200,201,202]],
  [40,122,"Silver / White",[203,204,205,206,207,208]],
  [41,41,"Olive Green",[209,210,211,212,213,214]],
  [42,42,"Gold / Blue",[215,216,217,218]],
  [42,123,"Silver / White",[219,220,221,222]],
  [42,124,"Black",[223,224,225]],
  [42,125,"Silver / Blue",[226,227,228]],
  [43,43,"Orange / White",[229,230,231,232]],
  [44,44,"Blue",[233,234,235,236]],
  [45,45,"Orange / Black",[237,238,239,240]],
  [47,47,"Black",[241,242,243,244]],
  [47,126,"White",[245,246,247,248,249]],
  [47,127,"White / Blue",[250,251,252]],
  [47,128,"White / Silver",[253,254]],
  [48,48,"Black",[255,256,257,258]],
  [49,49,"Black / Grey",[259,260]],
  [50,50,"Black",[261,262,263]],
  [50,129,"White",[264]],
  [51,51,"Black",[265]],
  [52,52,"Black",[266,267,268,269]],
  [52,130,"Red / Black",[270,271,272,273,274]],
  [52,131,"Blue / Black",[275,276,277,278]],
  [53,53,"Black",[279,280]],
  [54,54,"Black / Grey",[281,282]],
  [55,55,"Black",[283]],
  [55,132,"Grey",[284,285,286,287]],
  [56,56,"Green / Yellow",[288,289,290]],
  [57,57,"Black / White",[291,292,293,294]],
  [58,58,"Black / White",[295,296]],
  [58,133,"Black / Purple / Teal",[297,298,299,300]],
  [58,134,"White",[301,302]],
  [59,59,"Black",[303,304]],
  [59,135,"Beige / Grey",[305,306,307,308]],
  [59,136,"Cream",[309,310,311]],
  [60,60,"Tan",[312,313,314]],
  [61,61,"Cream",[315,316,317]],
  [62,62,"Green / White",[318,319,320,321]],
  [63,63,"White / Navy",[322,323,324]],
  [64,64,"White / Blue",[325,326,327]],
  [64,137,"White / Red",[328]],
  [65,65,"White / Blue",[329,330,331,332]],
  [66,66,"White / Royal Blue",[333,334,335,336]],
  [66,138,"White / Grey",[337,338,339]],
  [66,139,"White / Navy",[340,341,342]],
  [66,140,"Black",[343,344]],
  [66,141,"Black / Yellow",[345,346,347,348]],
  [66,142,"White / Red / Black",[349,350,351]],
  [66,143,"White / Black",[352,353,354]],
  [67,67,"White",[355,356,357]],
  [68,68,"Black",[358,359,360]],
  [69,69,"Black",[361,362,363]],
  [70,70,"White / Silver",[364,365,366]],
  [71,71,"White / Black",[367,368,369]],
  [72,72,"Cream",[370]],
  [73,73,"Beige / Pale Blue",[371,372,373]],
  [74,74,"Black / White",[374,375,376]],
  [75,75,"Crystal / Blue",[377,378,379,380,381,382,383]],
  [76,76,"Denim / Red",[384,385,386,387,388]],
  [77,77,"Black / White",[389,390,391,392]],
  [78,78,"Black / White",[393,394,395,396]],
  [79,79,"Blue / White / Teal",[397,398,399,400,401,402,403,404,405,406,407]],
  [80,80,"Green / White",[408,409,410,411,412]],
  [81,81,"White / Green",[413,414,415,416]],
  [82,82,"Grey / Black",[417,418,419]],
  [83,83,"Mint / Coral",[420,421,422,423,424]],
  [84,84,"Purple / Mint / Pink",[425,426,427,428]],
  [85,85,"Cream / Pink",[429,430,431]],
  [86,86,"Black / Teal",[432,433,434,435]],
  [87,87,"Black",[436,437,438]],
  [88,88,"Brown / White",[439,440,441]],
  [89,89,"Black",[442,443,444]],
  [90,90,"Black",[445,446,447]],
  [91,91,"White / Midnight Navy",[448,449,450,451]],
  [92,92,"Orange / White",[452,453,454,455,456]],
  [93,93,"Green / Cream",[457,458,459,460]],
  [94,94,"Black / Grey",[461]],
  [95,95,"White / Cream / Black",[462]],
  [96,96,"Grey / Orange",[463,464,465,466,467,468,469,470]],
  [97,97,"Cream / Grey",[471,472,473]],
  [98,98,"Navy / Yellow",[474,475,476]],
  [99,99,"Grey / White",[477,478,479,480]],
  [100,100,"Black / Cream",[481,482]],
  [101,101,"Purple / White",[483,484,485,486]],
  [102,102,"Light Blue",[487,488,489]],
  [103,103,"Purple",[490,491,492]],
  [104,104,"Black / White",[493]],
  [105,105,"Khaki / Black",[494,495,496,497]],
  [106,106,"White / Grey",[498,499,500]],
  [107,107,"White / Green",[501,502,503,504,505]],
  [108,108,"Blue / Purple / White",[506,507,508,509]],
  [109,109,"Blue / Purple",[510,511]]
];

const catalogCards = cardRows.map(
  ([parentProductId, id, color, mediaIds, overrides = {}]) => {
    const {kind, ...family} = families[parentProductId];
    const defaults = kind === 'W' ? watchDefaults : sneakerDefaults;

    const media = mediaIds.map(i => {
      const src = assetUrls[i];
      const type = src.includes('/video/upload/') ? 'video' : 'image';
      const item = {type, src};

      if (type === 'video' && kind === 'S') {
        item.poster = src.replace(/\.mp4$/, '.jpg');
      }

      return item;
    });

    const gallery = [...new Set(
      media.filter(m => m.type === 'image').map(m => m.src)
    )];

    const image = gallery[0];

    const slug = id === parentProductId
      ? family.slug
      : family.slug + '-' + color.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');

    const name = family.familyName.endsWith(' — ' + color)
      ? family.familyName
      : family.familyName + ' — ' + color;

    return {
      ...defaults,
      ...family,
      id,
      parentProductId,
      name,
      slug,
      ...overrides,
      image,
      secondaryImage: gallery[1] || image,
      gallery,
      media,
      variants: [{color, image, media}],
      colors: [color]
    };
  }
);


// One card per watch model. All colors remain available in its modal.
const products = []
const watchModels = new Map()
const mediaIdentity = (item) => item.src.replace(/\/v\d+\//, '/').replace(/_[^_/.]+(?=\.[a-z0-9]+$|$)/i, '')
for (const card of catalogCards) {
  if (card.category !== 'Watches') { products.push(card); continue }
  const key = `${card.parentProductId}:${card.familyName}`
  let model = watchModels.get(key)
  if (!model) {
    model = {...card, name: card.familyName, variants: [], colors: [], gallery: [], media: []}
    watchModels.set(key, model)
    products.push(model)
  }
  for (const variant of card.variants) {
    const seen = new Set()
    const media = variant.media.filter(item => {
      const key = mediaIdentity(item)
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
    model.variants.push({...variant, media, price: card.price})
    model.colors.push(variant.color)
    model.media.push(...media)
    model.gallery.push(...media.filter(item => item.type === 'image').map(item => item.src))
  }
  model.secondaryImage = model.gallery[1] || model.image
}

export const WATCHES_BACKGROUND_MEDIA = {
  video: "https://res.cloudinary.com/dnvgl9k4i/video/upload/v1791807251/1006_4_epa6ql.mp4",
  poster: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1791826874/1006_4_-Cover_zag2k0"
};

// Category data refreshed from the audited first-755 Cloudinary selection.
export { EYEWEAR_PRODUCTS } from './newEyewearCatalog'
export { MENSWEAR_PRODUCTS, WOMENS_PRODUCTS } from './refreshedCatalog'
import { EYEWEAR_PRODUCTS } from './newEyewearCatalog'
import { MENSWEAR_PRODUCTS, WOMENS_PRODUCTS } from './refreshedCatalog'
export const EYEWEAR_ASSETS = EYEWEAR_PRODUCTS.flatMap(product => product.gallery)
export const MENSWEAR_ASSETS = MENSWEAR_PRODUCTS.flatMap(product => product.gallery)
export const EYEWEAR_EXCLUDED_IMAGE_NUMBERS = []
export const EYEWEAR_UNPAIRED_IMAGE_NUMBERS = []
products.push(...WOMENS_PRODUCTS, ...EYEWEAR_PRODUCTS, ...MENSWEAR_PRODUCTS)
export default [...products.filter(product => !isRetiredSneaker(product)).map(refreshRetainedSneaker), ...NEW_STUDIO_SNEAKERS]
