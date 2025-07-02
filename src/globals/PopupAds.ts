import type { GlobalConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'

export const PopupAds: GlobalConfig = {
  slug: 'popup-ads',
  access: {
    read: authenticatedOrPublished,
    update: authenticated,
  },

  fields: [
    {
      name: 'ads',
      label: 'โฆษณาป๊อปอัพ',
      admin: {
        description: 'รายการโฆษณาที่จะแสดงเป็นป๊อปอัพ สามารถลากเพื่อเปลี่ยนลำดับการแสดงผลได้',
      },
      type: 'array',
      fields: [
        {
          name: 'isActive',
          label: 'เปิดใช้งาน',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'เปิด/ปิดการแสดงผลโฆษณานี้',
          },
        },
        // {
        //   name: 'title',
        //   label: 'ชื่อโฆษณา',
        //   type: 'text',
        //   required: true,
        //   admin: {
        //     description: 'ชื่อของโฆษณาสำหรับการจัดการ',
        //   },
        // },
        // {
        //   name: 'image',
        //   label: 'รูปภาพโฆษณา',
        //   type: 'upload',
        //   relationTo: 'media',
        //   required: true,
        //   admin: {
        //     description: 'รูปภาพที่จะแสดงในโฆษณา',
        //   },
        //   filterOptions() {
        //     return {
        //       mimeType: {
        //         contains: 'image/',
        //       },
        //     }
        //   },
        // },
        // {
        //   name: 'link',
        //   label: 'ลิงก์โฆษณา',
        //   type: 'text',
        //   required: false,
        //   admin: {
        //     description: 'ลิงก์ที่จะเปิดเมื่อคลิกที่โฆษณา',
        //   },
        // },
        // {
        //   name: 'openInNewTab',
        //   label: 'เปิดในแท็บใหม่',
        //   type: 'checkbox',
        //   defaultValue: true,
        //   admin: {
        //     description: 'เปิดลิงก์ในแท็บใหม่หรือไม่',
        //     condition: (data) => !!data?.link,
        //   },
        // },
        // {
        //   name: 'displayDuration',
        //   label: 'ระยะเวลาแสดงโฆษณา',
        //   required: true,
        //   admin: {
        //     description: 'ระยะเวลา (มิลลิวินาที) ที่จะแสดงโฆษณานี้',
        //   },
        //   type: 'number',
        //   defaultValue: 5000, // ค่าเริ่มต้น 5 วินาที
        //   min: 1000, // ขั้นต่ำ 1 วินาที
        // },
        // {
        //   name: 'displaySettings',
        //   label: 'การตั้งค่าการแสดงผล',
        //   type: 'group',
        //   fields: [
        //     {
        //       name: 'startDate',
        //       label: 'วันที่เริ่มแสดง',
        //       type: 'date',
        //       admin: {
        //         description: 'วันที่จะเริ่มแสดงโฆษณานี้ (เว้นว่างหากต้องการแสดงทันที)',
        //         date: {
        //           pickerAppearance: 'dayAndTime',
        //         },
        //       },
        //     },
        //     {
        //       name: 'endDate',
        //       label: 'วันที่สิ้นสุดการแสดง',
        //       type: 'date',
        //       admin: {
        //         description: 'วันที่จะหยุดแสดงโฆษณานี้ (เว้นว่างหากไม่มีวันสิ้นสุด)',
        //         date: {
        //           pickerAppearance: 'dayAndTime',
        //         },
        //       },
        //     },
        //   ],
        // },
        // {
        //   name: 'displayOrder',
        //   label: 'ลำดับการแสดงผล',
        //   type: 'number',
        //   admin: {
        //     description: 'ลำดับการแสดงผล (เลขน้อยจะแสดงก่อน) หรือใช้การลากเพื่อจัดลำดับ',
        //   },
        //   defaultValue: 0,
        // },
      ],
    },
  ],

  admin: {
    group: 'GDCC',
    description: 'การตั้งค่าโฆษณาป๊อปอัพ',
  },
}
