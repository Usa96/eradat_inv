import React from 'react'
import {
  CalendarIcon,
  ExternalLinkIcon,
  NewspaperIcon,
  VideoIcon,
  MicIcon,
} from 'lucide-react'
export interface MediaItem {
  id: number
  image: string
  title: string
  date: string
  content?: string
  author?: string
  type: 'article' | 'video' | 'podcast' | 'press-release'
  featured?: boolean
  duration?: string
  videoUrl?: string
  podcastUrl?: string
  relatedItems?: number[]
}
export const mediaItems: MediaItem[] = [
  {
    id: 1,
    image: '/assets/media/Media 1.jpg',
    title: 'Real Estate Swap Approval: Sanam Real Estate Company and Fanan Real Estate Company',
    date: 'March 16, 2023',
    content: 'Sanam Real Estate Company has approved a strategic real estate swap with its subsidiary, Fanan Real Estate Company K.S.C.C.\n\nThe swap involves selling two properties in Bneid Al-Qar and Al-Farwaniya to Fanan Real Estate Company at a book value of KD 4,940,000.\n\nAdditionally, the concession agreement rights of a land in Dubai, United Arab Emirates, will be transferred from Fanan Real Estate Company to a subsidiary of Sanam Real Estate Company, with a book value of KD 1,251,056.',

    type: 'press-release',
    relatedItems: [2, 3],
  },
  {
    id: 2,
    image: '/assets/media/Media 2.jpg',
    title: 'Board-approved Property Exchange: Sanam Real Estate and Fanan Real Estate Company',
    date: 'May 11, 2023',
    content: 'The Board of Directors has approved the report of an independent asset assessor approved by the Capital Markets Authority regarding the exchange of properties with the subsidiary, Fanan Real Estate Company K.S.C.C.\n\nThe details of the property swap are as follows:\n\nSelling the Property in Farwaniya: Sanam Real Estate Company will sell the property in Farwaniya to its subsidiary, Fanan Real Estate, at a book value of KD 2,240,000.\n\nTransferring the Right of Use of a Land in Dubai: The subsidiary company, Fanan Real Estate, will transfer the right of use of a land in Dubai, United Arab Emirates, to a subsidiary of Sanam Real Estate Company. The book value of this land is KD 1,251,056.\n\nIn-Kind Increase of Subsidiarys Capital: The Board of Directors has also approved the in-kind increase of its subsidiarys capital by incorporating the property owned by Sanam Real Estate Company in Bneid Al Gar area at a book value of KD 2,700,000.\n\nThese transactions reflect the strategic real estate exchange between Sanam Real Estate Company and its subsidiary, Fanan Real Estate Company, in order to optimize the utilization of assets and enhance the overall value of the companies involved.',
    type: 'article',
    relatedItems: [1, 7],
  },
  {
    id: 3,
    image: '/assets/media/Media 3.jpg',
    title: 'Decisions of the Extraordinary GA: Capital Increase, Name Change, and Sharia Compliance',
    date: 'June 7, 2023',
    content: 'The subsidiary companys extraordinary general assembly convened on 07/06/2023, where the following agenda items were unanimously approved:\n\nCapital Increase: The companys capital will be raised from 4,300,000 KWD to 6,798,697 KWD through an in-kind capital infusion.\n\nName Change: The company will be rebranded from Fanan Real Estate Company to Eradat International Real Estate Company.\n\nSharia Compliance: It was agreed that the company will operate in accordance with the principles of Islamic Sharia law.\n\nProfit Distribution: The ordinary general assembly, subject to the Board of Directors proposal, may approve the periodic distribution of profits.',
    type: 'press-release',
    relatedItems: [1, 4],
  },
  {
    id: 4,
    image: '/assets/media/13_July_2023.png',
    title: 'Formation of the Board of Directors of ERADAT International Real Estate Company',
    date: 'July 13, 2023',
    content: 'The Ordinary General Assembly of ERADAT International Real Estate Company was held on Thursday 13/07/2023 at the companys headquarters and approved the acceptance of the resignation submitted by the members of the Board of Directors in full and the election of the members of the Board of Directors for the next three years as follows:\n\n1. Dr. Sulaiman Tareq Al-Abduljader – Chairman.\n2. Mr. Waleed Al-Sumait – Vice Chairman.\n3. Mr. Fawaz Al-Roudan – Independent Board Member.\n4. Mr. Saad Al-Muneefi – Board Member.\n5. Mr. Bader Al Hajeri – Board Member and CEO.\n\nThe members of the new Board of Directors have extensive experience in various fields of economic work and a great ability to manage investment files and develop strategic plans.\n\nERADAT International Real Estate Company hopes that the selection of the new Board of Directors is the beginning of a new era of achievements and ambitions to achieve the greatest benefit for shareholders.',
    type: 'article',
    relatedItems: [2, 6],
  },
  {
    id: 5,
    image: '/assets/media/9_August_1.png',
    title: 'Sanams Board of Directors Approves an Initial Partnership with an In-Kind Shares in the Capital of the Subsidiary "ERADAT".',
    date: 'August 9, 2023',
    content: 'On Wednesday 09/08/2023, the Board of Directors of Sanam Real Estate Company reached a preliminary agreement through its subsidiary “ERADAT International Real Estate Company K.S.C.C” with a public shareholding real estate company, to increase the capital of Eradat International Real Estate Company to reach KD 13,163,000.\n\n(The current capital of Eradat International Real Estate Company is 6,798,697 KD, and the accumulated losses will be amortized to bring the capital to 4,940,000 KD).\n\nProvided that the aforementioned capital increase be in-kind with a value of KD 8,223,000, representing 62.47% of the company’s capital (the in-kind increase consists of real estate with a total value of KD 49,463,000 and a net value of KD 8,223,000 after excluding the bank facilities granted with its guarantee).\n\nThus, the share of Sanam Real Estate Company becomes 37.53%, equivalent to KD 4,940,000 of the capital, afterwards becoming an associate company.',
    type: 'press-release',
    relatedItems: [1, 8],
  },
  {
    id: 6,
    image: '/assets/media/9_August_2.png',
    title: 'Aqarat and Sanam Real Estate Enters into a Strategic Partnership in "ERADAT"',
    date: 'August 9, 2023',
    content: 'Aqarat - Kuwait Real Estate Company and Sanam Real Estate Company announced the signing of a preliminary agreement to enter a strategic partnership.\n\nThis collaboration aims to introduce unique real estate products through a company partnership that is shariah compliant, named ERADAT International Real Estate Company.\n\nThe partnership will result in a company with a diversified real estate portfolio, offering rewarding returns and enabling the distribution of periodic dividends to shareholders.\n\nNotably, this marks the first collaboration between these two entities, with a primary objective of delivering innovative and sustainable solutions within the realm of real estate investment.\n\nFollowing the signing of the preliminary agreement, the capital of ERADAT is poised to exceed KD 13 million.\n\nAqarat - Company will be holding a majority share of 62.5%, while Sanam Real Estate Company will hold a share of 37.5%, after the completion of the strategic partnership procedures.',
    type: 'article',
    relatedItems: [2, 4],
  },
    {
    id: 7,
    image: '/assets/media/9_may-2024-optimized.webp',
    title: 'ERADAT International Real Estate Company convenes Ordinary General Assembly Meetings for 2023',
    date: 'May 9, 2024',
    content: 'The Ordinary General Assembly of Eradat International Real Estate Company was convened at 12:00 PM on Thursday, 09/05/2024, at the Company’s headquarters, in the presence of the following:\n\nShareholders representing 131,629,267 shares out of the Company’s total capital of 131,630,000 shares, thereby achieving a quorum of 99.9994%.\n\nDr. Sulaiman Tareq Al Abduljader – Chairman of the Board of Directors.\n\nMr. Abdulaziz Nasser Jabr – Representative of Mr. Abdullatif Al Aiban from Al Qatami, Al Aiban & Partners (Grant Thornton) – External Auditor.\n\nDr. Mohammad Abdulrahman Al Sharafa – Member of the Sharia Supervisory Board.\n\nDr. Sulaiman Tareq Al Abduljader, Chairman of the Board, opened the meeting by welcoming the shareholders and presented the agenda as follows:\n\nFirst: Discussion and approval of the Board of Directors’ report for the financial year ended 31/12/2023.\n\nSecond: Discussion and approval of the external auditor’s report for the financial year ended 31/12/2023.\n\nThird: Discussion and approval of the Sharia Supervisory Board’s report for the financial year ended 31/12/2023.\n\nFourth: Discussion and approval of the financial statements of the Company for the financial year ended 31/12/2023.\n\nFifth: Review of any violations and penalties recorded by regulatory authorities (financial or otherwise) for the financial year ended 31/12/2023. The Chairman of the Board confirmed that no penalties or violations were recorded against the Company during the year 2023.\n\nSixth: Discussion of the Board of Directors’ recommendation not to distribute dividends to shareholders for the financial year ended 31/12/2023.\n\nSeventh: Discussion of the non-distribution of remuneration to the members of the Board of Directors for the financial year ended 31/12/2023.\n\nEighth: Review of related party transactions for the financial year ended 31/12/2023 and authorization of the Board of Directors to enter into related party transactions until the next General Assembly meeting for the financial year ending 31/12/2024.\n\nNinth: Discussion and approval of discharging the members of the Board of Directors from any liabilities regarding legal, financial, and administrative matters related to the management of the Company for the financial year ended 31/12/2023.\n\nTenth: Appointment or reappointment of the external auditor for the financial year ending 31/12/2024 and authorizing the Board of Directors to determine their fees. The Ordinary General Assembly resolved to reappoint Mr. Abdullatif Al Aiban – License No. (94A) from Al Qatami, Al Aiban & Partners (Grant Thornton) as the Company’s auditor for the financial year ending 31/12/2024 and authorized the Board of Directors to determine the auditor’s fees.\n\nEleventh: Appointment or reappointment of the Sharia Supervisory Board for the financial year ending 31/12/2024 and authorizing the Board of Directors to determine their fees. The Ordinary General Assembly resolved to reappoint the following esteemed scholars as members of the Sharia Supervisory Board for the financial year ending 31/12/2024 and authorized the Board of Directors to determine their fees:\n\nDr. Hamad Yousif Al Mazroue\n\nDr. Abdulrahman Mohammad Al Baloul\n\nDr. Mohammad Abdulrahman Al Sharaf\n\nThe meeting concluded at 12:15 PM.',
    type: 'press-release',
    relatedItems: [2, 8],
  },
    {
    id: 8,
    image: '/assets/media/april_2025-optimized.webp',
    title: 'ERADAT International Real Estate Company approves FY 2024 financials at General Assembly Meeting',
    date: 'April 17, 2025',
    content: 'The Ordinary General Assembly of Eradat International Real Estate Company was held at 12:00 PM on Thursday, 17/04/2025, at the company’s headquarters, in the presence of shareholders representing 131,629,267 shares out of the company’s total shares amounting to 131,630,000 shares, with an attendance rate of 99.99%.\n\nThe meeting was attended by the Chairman of the Board of Directors, Dr. Sulaiman Tareq Al Abduljader, the Company Auditor Mr. Abdulaziz Nasser Jabr, representing Mr. Abdullatif Al Aiban from Al Qatami, Al Aiban & Partners (Grant Thornton), and Dr. Mohammed Abdulrahman Al Sharafa – Member of the Sharia Supervisory Board.\n\nDr. Sulaiman Tareq Al Abduljader, Chairman of the Board, opened the meeting by welcoming the esteemed shareholders and presented the agenda as follows:\n\nFirst: Discussing and approving the Board of Directors’ Report for the fiscal year ending 31/12/2024.\n\nSecond: Discussing and approving the External Auditor’s Report for the fiscal year ending 31/12/2024.\n\nThird: Discussing and approving the Sharia Supervisory Board’s Report for the fiscal year ending 31/12/2024.\n\nFourth: Discussing and approving the Company’s financial statements for the fiscal year ending 31/12/2024.\n\nFifth: Approving the deduction of 10% to the Legal Reserve, amounting to KD 71,905.\n\nSixth: Discussing the deduction of 10% to the Voluntary Reserve, amounting to KD 71,905.\n\nSeventh: Reviewing any violations or penalties (financial or otherwise) issued by regulatory authorities. The Chairman stated there were none in 2024.\n\nEighth: Discussing the Board’s proposal not to distribute dividends for the fiscal year ending 31/12/2024.\n\nNinth: Discussing the non-distribution of remuneration to the members of the Board of Directors.\n\nTenth: Reviewing related party transactions and authorizing the Board to continue such transactions until the next General Assembly for FY 2025.\n\nEleventh: Discharging the Board members from liability related to their legal, financial, and administrative actions for FY 2024.\n\nTwelfth: Reappointing Mr. Abdullatif Al Aiban – License No. (94 A), from Al Qatami, Al Aiban & Partners (Grant Thornton) as External Auditor for FY 2025, and authorizing the Board to determine the fees.\n\nThirteenth: Reappointing the following Sharia Supervisory Board members for FY 2025, and authorizing the Board to determine their fees: Dr. Hamad Yousef Al Mazrouei, Dr. Abdulrahman Mohammed Al Baloul, and Dr. Mohammed Abdulrahman Al Sharafa.\n\nThe meeting concluded at 12:15 PM.',
    type: 'article',
    relatedItems: [4, 6],
  },


]
// Helper function to get the type icon
export const getTypeIcon = (type: string) => {
  switch (type) {
    case 'article':
      return <NewspaperIcon className="h-4 w-4" />
    case 'video':
      return <VideoIcon className="h-4 w-4" />
    case 'podcast':
      return <MicIcon className="h-4 w-4" />
    case 'press-release':
      return <ExternalLinkIcon className="h-4 w-4" />
    default:
      return <NewspaperIcon className="h-4 w-4" />
  }
}
// Helper function to get related media
export const getRelatedMedia = (ids: number[] = []) => {
  return mediaItems.filter((item) => ids.includes(item.id))
}
// Helper function to parse dates for sorting
export const parseDate = (dateString: string) => {
  const months: {
    [key: string]: number
  } = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  }
  const parts = dateString.split(' ')
  const month = months[parts[0]]
  const day = parseInt(parts[1].replace(',', ''))
  const year = parseInt(parts[2])
  return new Date(year, month, day)
}
// Get latest media items
export const getLatestMediaItems = (count = 3) => {
  return [...mediaItems]
    .sort((a, b) => {
      const dateA = parseDate(a.date)
      const dateB = parseDate(b.date)
      return dateB.getTime() - dateA.getTime()
    })
    .slice(0, count)
}
