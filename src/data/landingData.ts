import { 
  RecoveryServiceItem, 
  IndustrySolutionItem, 
  RecoveryProcessStep, 
  RecoveryCaseItem, 
  TestimonialItem,
  RecoveryDeviceOption,
  RecoveryAddon
} from '../types/landing';

export const COMPANY_INFO = {
  name: 'Thành Phúc Data Recovery',
  brandShort: 'Thành Phúc Recovery',
  slogan: 'Khôi Phục Dữ Liệu Thẻ Nhớ • Ổ Cứng • USB • Drive | Hỗ Trợ Online Toàn Quốc',
  hotline: '0935.473.890',
  hotlineDisplay: '0935 473 890',
  email: 'thanhphucrecover@gmail.com',
  workingHours: '24/7/365 - Tiếp nhận cứu dữ liệu Online Toàn Quốc & Trực tiếp tại TP.HCM',
  city: 'Hồ Chí Minh',
  address: 'Thành phố Hồ Chí Minh (Hỗ trợ Online từ xa toàn quốc & Tiếp nhận trực tiếp)',
  social: {
    facebookPersonal: 'https://www.facebook.com/ThanhphucRecover',
    facebookPage: 'https://www.facebook.com/Khoiphucdulieuthenho/',
    facebookGroup: 'https://www.facebook.com/groups/khoiphucdulieuthe/',
    zalo: 'https://zalo.me/0935473890',
  },
  metaVerified: {
    isVerified: true,
    badgeText: 'Dịch vụ Meta đã xác minh (Tích Xanh Chính Chủ)',
    pageFollowers: '26K người theo dõi',
    personalFollowers: '20K người theo dõi',
    groupMembers: '47.3K thành viên',
    groupName: 'Khôi Phục Dữ Liệu Ổ Cứng - Thẻ Nhớ - Bị Format - Xoá Nhầm - Lỗi Phân Vùng',
    adminGroupText: 'Admin Sáng Lập Group KPDL (47.3K Thành viên)',
  },
  metrics: {
    groupMembersCount: '47.300+',
    pageFollowersCount: '26.000+',
    personalFollowersCount: '20.000+',
    totalCommunity: '93.000+',
    casesResolved: '28.000+',
    successRate: '99.2%',
    experienceYears: '12+',
    diagnosticTime: '10 - 20 Phút Online',
  }
};

export const CORE_SERVICES: RecoveryServiceItem[] = [
  {
    id: 'service-memory-card',
    title: 'Cứu Dữ Liệu Thẻ Nhớ Máy Ảnh (SD, MicroSD, CF, CFexpress)',
    category: 'Thẻ Nhớ Media & Camera 📸🎦',
    badge: 'Chuyên khoa sâu số 1',
    shortDesc: 'Xử lý triệt để thẻ nhớ máy ảnh bị xóa nhầm, format nhầm, lỗi thẻ đòi format (RAW) và đặc biệt là phục hồi file ảnh/video bị ghi đè.',
    description: 'Ứng dụng thuật toán ghép nối phân mảnh chuyên sâu (Fragmented Video Reconstructor) cho các file quay phim 4K, 8K Sony, Canon, Nikon, Lumix, Fujifilm, Flycam DJI, GoPro. Khôi phục nguyên vẹn 100% ảnh RAW và video không bị giật lag, mất tiếng.',
    features: [
      'Cứu ảnh RAW (CR2, CR3, ARW, NEF, DNG, RAF) và Video (MP4, MOV, MXF, ProRes)',
      'Xử lý tình trạng thẻ nhớ cắm vào máy tính bắt "Format disk before use"',
      'Thuật toán phục hồi file ảnh và video bị ghi đè (Overwritten files)',
      'Hỗ trợ toàn bộ chuẩn thẻ: SD, MicroSD, CF, CFast 2.0, CFexpress Type A/B, XQD',
      'Hỗ trợ cứu Online từ xa qua Ultraview toàn quốc trong 30 - 60 phút'
    ],
    metrics: '99.5% Thành công',
    iconName: 'Camera',
    popular: true
  },
  {
    id: 'service-hdd',
    title: 'Khôi Phục Dữ Liệu Ổ Cứng Cơ HDD (PC, Laptop, Di Động)',
    category: 'Ổ Cứng Cơ HDD',
    badge: 'Cứu dữ liệu chuyên sâu',
    shortDesc: 'Xử lý ổ cứng bị format nhầm, ghost đè, mất phân vùng, bad sector nặng, treo đơ máy hoặc ổ phát tiếng kêu cạch cạch.',
    description: 'Phục hồi toàn bộ dữ liệu tài liệu văn phòng, đồ họa, source code, kế toán từ các dòng ổ cứng WD, Seagate, Toshiba, Hitachi. Xử lý an toàn bằng công cụ phần cứng chuyên dụng, không làm suy hao từ tính phiến đĩa.',
    features: [
      'Khôi phục ổ cứng máy tính bị xóa nhầm dữ liệu, cài đè hệ điều hành Windows/Mac',
      'Xử lý ổ cứng di động cắm vào nhận chậm, đơ máy tính, báo định dạng RAW',
      'Can thiệp cứu dữ liệu ổ cứng bị bad sector mảng lớn',
      'Cứu dữ liệu ổ cứng cơ bị va đập, rơi rớt, lỗi cơ khí',
      'Tỷ lệ khôi phục thành công đạt trên 98.8%'
    ],
    metrics: '98.8% Thành công',
    iconName: 'HardDrive',
    popular: true
  },
  {
    id: 'service-ssd',
    title: 'Phục Hồi Dữ Liệu Ổ Cứng Thể Rắn SSD & M.2 NVMe',
    category: 'Ổ Cứng Thể Rắn SSD',
    badge: 'Công nghệ chip nhớ cao cấp',
    shortDesc: 'Chuyên trị SSD không nhận diện trong Windows/BIOS, báo dung lượng 0MB, lỗi Firmware hoặc mất bảng dịch Translator.',
    description: 'Sử dụng hệ thống nạp Loader Microcode và phần mềm chuyên dụng đọc trực tiếp bảng phân bổ địa chỉ khối nhớ, tái tạo cấu trúc thư mục từ các dòng SSD Samsung, Kingston, Western Digital, Crucial, Kioxia.',
    features: [
      'Hỗ trợ toàn bộ chuẩn: SATA III 2.5", mSATA, M.2 SATA, M.2 NVMe PCIe Gen 3/4/5',
      'Xử lý lỗi Firmware phổ biến trên controller Phison, SMI, Marvell, Realtek',
      'Phục hồi tệp tin bị xóa hoặc format trên môi trường ổ SSD',
      'Bảo toàn nguyên vẹn cấu trúc cây thư mục và tên tập tin gốc',
      'Kiểm tra và nghiệm thu tệp tin trước khi thanh toán'
    ],
    metrics: '97.5% Thành công',
    iconName: 'Cpu'
  },
  {
    id: 'service-usb-flash',
    title: 'Cứu Dữ Liệu USB & Thiết Bị Lưu Trữ Flash',
    category: 'USB & Flash Drive',
    badge: 'Lấy ngay trong ngày',
    shortDesc: 'Khôi phục file Word, Excel, PDF, dữ liệu quan trọng từ USB bị gãy cổng, chập nguồn, đòi format hoặc nhiễm virus ẩn file.',
    description: 'Xử lý các lỗi phần mềm và vật lý của USB Kingston, Sandisk, Transcend, Corsair. Khắc phục triệt để tình trạng virus làm ẩn file, đổi đuôi shortcut, file biến thành ký tự lạ hoặc dung lượng báo 0 byte.',
    features: [
      'Cứu dữ liệu USB bị đòi format, mất phân vùng, dung lượng hiển thị sai',
      'Khôi phục văn bản Word, bảng tính Excel, hóa đơn tài chính bị mất tích',
      'Khử sạch 100% mã độc virus ẩn tệp tin trên USB trước khi bàn giao',
      'Hàn nối vi mạch USB bị gãy gập chân cắm, chập chờn nguồn điện',
      'Hỗ trợ xử lý Online qua mạng lấy dữ liệu ngay sau 15 - 30 phút'
    ],
    metrics: '99.8% Thành công',
    iconName: 'Zap'
  },
  {
    id: 'service-google-drive',
    title: 'Khôi Phục Dữ Liệu Google Drive, OneDrive & Cloud',
    category: 'Đám Mây & Cloud Drive',
    badge: 'Dịch vụ độc quyền',
    shortDesc: 'Hỗ trợ khôi phục dữ liệu trên Google Drive, OneDrive, Dropbox bị xóa vĩnh viễn trong thùng rác hoặc đồng bộ lỗi.',
    description: 'Giải pháp chuyên biệt hỗ trợ khôi phục các tệp tin, thư mục dự án trên Google Drive doanh nghiệp (Google Workspace) hoặc tài khoản cá nhân đã bị dọn sạch thùng rác (Empty trash), bị tấn công xóa dữ liệu hoặc đồng bộ ghi đè.',
    features: [
      'Phục hồi tệp tin Google Drive đã bị xóa vĩnh viễn vượt quá thời hạn 30 ngày',
      'Khôi phục thư mục dùng chung (Shared Drive) bị thành viên xóa nhầm',
      'Xử lý sự cố đồng bộ OneDrive / Google Drive bị lỗi ghi đè phiên bản cũ',
      'Tư vấn thiết lập chính sách lưu trữ an toàn, chống thất thoát dữ liệu đám mây',
      'Thực hiện hoàn toàn Online từ xa, không cần can thiệp thiết bị vật lý'
    ],
    metrics: '96.5% Thành công',
    iconName: 'FolderCheck'
  },
  {
    id: 'service-server-raid',
    title: 'Cứu Dữ Liệu Máy Chủ Server, SAN, NAS & Mảng Đĩa RAID',
    category: 'Hệ Thống Doanh Nghiệp',
    badge: 'Cấp cứu 24/7',
    shortDesc: 'Cứu máy chủ Dell, HP, IBM, NAS Synology hỏng nhiều ổ đĩa, rã mảng RAID 0, 1, 5, 6, 10 hoặc lỗi CSDL kế toán MISA, SQL.',
    description: 'Ảo hóa mảng đĩa bằng phần mềm chuyên sâu, tái cấu trúc thứ tự khối dữ liệu và độ lệch chẵn lẻ (Parity) để trích xuất 100% cơ sở dữ liệu doanh nghiệp mà không làm ảnh hưởng đến dữ liệu nguyên bản.',
    features: [
      'Xử lý mảng RAID bị offline, hỏng cùng lúc 2-3 ổ đĩa (Degraded / Failed Array)',
      'Hỗ trợ thiết bị lưu trữ NAS Synology, QNAP, Asustor, Dell PowerEdge',
      'Phục hồi toàn bộ CSDL kế toán MISA, FAST, Bravo, SQL Server, Oracle',
      'Ký cam kết bảo mật thông tin pháp lý NDA có dấu mộc đầy đủ',
      'Hỗ trợ kỹ thuật trực tuyến hoặc có mặt xử lý khẩn cấp 24/7'
    ],
    metrics: '99.0% Thành công',
    iconName: 'Server'
  }
];

export const INDUSTRY_SOLUTIONS: IndustrySolutionItem[] = [
  {
    id: 'sol-photographer',
    title: 'Nhiếp Ảnh Gia, Studio Cưới & Ekip Media',
    subtitle: 'Giải cứu cảnh quay đám cưới, TVC, sự kiện và kho ảnh RAW quý giá',
    description: 'Thẻ nhớ máy ảnh bị lỗi ngay sau buổi chụp tiệc cưới hoặc thẻ nhớ flycam bị va đập trước giờ giao file cho khách hàng. Thành Phúc Data Recovery chuyên sâu xử lý các trường hợp xóa nhầm, format nhầm, lỗi thẻ và file bị ghi đè.',
    benefits: [
      'Tái ghép nối phân mảnh video chuẩn xác 100% (không lỗi âm thanh, không mất hình)',
      'Khôi phục đầy đủ ảnh RAW độ phân giải cao và video 4K/8K',
      'Ưu tiên xử lý cấp tốc trong 1 - 2 giờ để kịp tiến độ trả file cho khách hàng VIP',
      'Hỗ trợ xử lý trực tuyến từ xa qua mạng cho các ekip đang đi quay ngoại tỉnh'
    ],
    suitableFor: ['Studio ảnh cưới', 'Nhiếp ảnh gia tự do (Freelancer)', 'Ekip quay phim TVC', 'Nhà sáng tạo nội dung YouTube/TikTok'],
    timeline: 'Cấp cứu 30 Phút - 2 Giờ',
    iconName: 'Camera'
  },
  {
    id: 'sol-online-remote',
    title: 'Khách Hàng Toàn Quốc - Cứu Dữ Liệu Online Từ Xa',
    subtitle: 'Không cần mang máy đi xa - Xử lý trực tiếp qua mạng Internet an toàn',
    description: 'Bạn ở Hà Nội, Đà Nẵng, Cần Thơ, Hải Phòng hay bất kỳ tỉnh thành nào trên cả nước? Chỉ cần máy tính có kết nối mạng Internet, Thành Phúc Recovery sẽ kết nối qua UltraViewer để kiểm tra và phục hồi dữ liệu trực tiếp dưới sự giám sát của bạn.',
    benefits: [
      'Khách hàng ngồi tại nhà theo dõi trực tiếp từng thao tác trên màn hình',
      'Tiết kiệm tối đa thời gian và chi phí đi lại, không lo thất lạc thiết bị',
      'Kiểm tra chẩn đoán tình trạng tệp tin hoàn toàn MIỄN PHÍ trước khi báo giá',
      'Chỉ thanh toán khi dữ liệu đã được phục hồi đúng yêu cầu của bạn'
    ],
    suitableFor: ['Khách hàng ở các tỉnh thành xa', 'Doanh nghiệp cần xử lý gấp trong đêm', 'Người dùng cá nhân cần lấy file khẩn cấp'],
    timeline: 'Xử lý Online 15 - 60 Phút',
    iconName: 'Globe'
  },
  {
    id: 'sol-enterprise',
    title: 'Doanh Nghiệp, Kế Toán & Văn Phòng',
    subtitle: 'Bảo vệ nguồn dữ liệu kế toán, hóa đơn và hợp đồng kinh doanh',
    description: 'Máy tính kế toán bị hỏng ổ cứng, xóa nhầm file dữ liệu MISA hoặc USB chứa hóa đơn điện tử không nhận. Chúng tôi cung cấp giải pháp phục hồi dữ liệu bảo mật cao cấp với biên bản pháp lý đầy đủ.',
    benefits: [
      'Ký cam kết bảo mật thông tin pháp lý NDA trước khi xử lý',
      'Khôi phục nguyên vẹn các tệp dữ liệu kế toán .mbk, .smd, file Excel tài chính',
      'Xuất hóa đơn VAT điện tử và phiếu tiếp nhận dịch vụ chính thức',
      'Hướng dẫn giải pháp tự động sao lưu dữ liệu chống thất thoát về sau'
    ],
    suitableFor: ['Kế toán trưởng & Nhân viên văn phòng', 'Công ty xây dựng & kiến trúc', 'Doanh nghiệp thương mại'],
    timeline: 'Xử lý 2 - 8 Giờ',
    iconName: 'Building2'
  },
  {
    id: 'sol-personal',
    title: 'Cá Nhân, Sinh Viên & Gia Đình',
    subtitle: 'Khôi phục hình ảnh kỷ niệm, video gia đình, luận văn & đồ án tốt nghiệp',
    description: 'Ổ cứng laptop chứa ảnh kỷ niệm 10 năm gia đình hoặc đồ án tốt nghiệp chuẩn bị bảo vệ bị mất đột ngột. Thành Phúc Recovery luôn thấu hiểu giá trị tinh thần vô giá của dữ liệu và đồng hành với chi phí thân thiện nhất.',
    benefits: [
      'Kiểm tra chẩn đoán lỗi hoàn toàn MIỄN PHÍ',
      'Cam kết: "Không cứu được dữ liệu - Hoàn toàn không mất phí"',
      'Chính sách hỗ trợ giá đặc biệt dành cho sinh viên, học sinh',
      'Bảo mật tuyệt đối hình ảnh và video riêng tư của gia đình'
    ],
    suitableFor: ['Người dùng cá nhân', 'Sinh viên đại học', 'Gia đình lưu trữ video ảnh'],
    timeline: 'Xử lý trong ngày',
    iconName: 'UserCheck'
  }
];

export const RECOVERY_PROCESS: RecoveryProcessStep[] = [
  {
    step: 1,
    title: 'Tiếp Nhận & Kiểm Tra Miễn Phí (Online hoặc Trực Tiếp)',
    duration: '10 - 20 Phút',
    description: 'Khách hàng liên hệ qua Hotline/Zalo 0935.473.890 hoặc gửi mã UltraViewer. Thành Phúc Data Recovery kiểm tra chẩn đoán chính xác nguyên nhân lỗi (xóa nhầm, format, lỗi phân vùng, bad sector hay hỏng cơ học).',
    deliverables: [
      'Kiểm tra quét sơ bộ tình trạng tệp tin hoàn toàn MIỄN PHÍ',
      'Báo cáo khả năng phục hồi dữ liệu và tỷ lệ thành công',
      'Báo giá trọn gói niêm yết minh bạch, cam kết không phát sinh bất kỳ phụ phí nào'
    ],
    iconName: 'ClipboardCheck'
  },
  {
    step: 2,
    title: 'Xác Nhận Phương Án & Cam Kết Bảo Mật Thông Tin',
    duration: 'Ngay lập tức',
    description: 'Khách hàng thống nhất phương án xử lý và chi phí. Thành Phúc Recovery cam kết bảo mật 100% dữ liệu cá nhân, hình ảnh riêng tư và tài liệu kinh doanh theo thỏa thuận minh bạch.',
    deliverables: [
      'Thỏa thuận cung cấp dịch vụ khôi phục dữ liệu rõ ràng',
      'Cam kết bảo mật thông tin khách hàng tuyệt đối',
      'Chính sách vàng: Không lấy được dữ liệu - Hoàn toàn không mất phí'
    ],
    iconName: 'ShieldCheck'
  },
  {
    step: 3,
    title: 'Tiến Hành Phục Hồi Dữ Liệu Chuyên Nghiệp',
    duration: '30 Phút - Vài Giờ tùy ca',
    description: 'Với ca lỗi logic (xóa nhầm, format, lỗi thẻ, ghi đè file): Xử lý trực tiếp Online từ xa qua Ultraview hoặc tại phòng kỹ thuật. Với ca lỗi vật lý nặng: Can thiệp bằng thiết bị phần cứng chuyên dụng trích xuất từng sector an toàn.',
    deliverables: [
      'Áp dụng thuật toán tái tạo phân mảnh video 4K/8K bản quyền',
      'Trích xuất dữ liệu sang thiết bị đệm an toàn, không ghi đè dữ liệu gốc',
      'Bảo toàn nguyên vẹn chất lượng ảnh RAW và video gốc'
    ],
    iconName: 'Cpu'
  },
  {
    step: 4,
    title: 'Khách Hàng Nghiệm Thu & Kiểm Tra Dữ Liệu',
    duration: 'Xem trực tiếp',
    description: 'Khách hàng trực tiếp mở thử các file hình ảnh, video, tài liệu Word/Excel quan trọng nhất để kiểm tra tính nguyên vẹn (có thể kiểm tra qua UltraViewer hoặc tại chỗ).',
    deliverables: [
      'Xem trước danh sách toàn bộ cây thư mục và dung lượng dữ liệu phục hồi',
      'Mở xem thử trực tiếp các file ảnh và video quan trọng',
      'Chỉ tiến hành thanh toán khi khách hàng hoàn toàn hài lòng với kết quả dữ liệu'
    ],
    iconName: 'FileCheck'
  },
  {
    step: 5,
    title: 'Bàn Giao Dữ Liệu An Toàn & Hỗ Trợ Kỹ Thuật',
    duration: 'Hoàn tất bàn giao',
    description: 'Dữ liệu được bàn giao qua đường truyền đám mây tốc độ cao (Google Drive / Fshare) hoặc chép trực tiếp vào ổ cứng mới của bạn. Tư vấn giải pháp sao lưu định kỳ để không bao giờ mất dữ liệu lần thứ hai.',
    deliverables: [
      'Bàn giao 100% dữ liệu sạch đã quét khử virus',
      'Hỗ trợ kỹ thuật sau phục hồi chu đáo',
      'Tặng cẩm nang hướng dẫn sử dụng thẻ nhớ và ổ cứng an toàn'
    ],
    iconName: 'Lock'
  }
];

export const COST_ESTIMATOR_DEVICES: RecoveryDeviceOption[] = [
  {
    id: 'dev-sd-camera',
    name: 'Thẻ nhớ máy ảnh (SD, MicroSD, CF, CFexpress, Flycam) 📸🎦',
    badge: 'Chuyên gia số 1',
    isPopular: true,
    basePrice: 400000,
    priceEstimate: 'Từ 400.000 đ',
    unit: 'Cứu Online toàn quốc hoặc trực tiếp',
    suitable: 'Chuyên trị thẻ nhớ Sony, SanDisk, Lexar, Transcend bị xóa nhầm, format, đòi format hoặc ghi đè file ảnh/video.',
    timeEstimate: '30 phút - 2 giờ',
    features: [
      'Cứu ảnh cưới, phóng sự, kỷ yếu, TVC, sự kiện',
      'Thuật toán ghép nối phân mảnh video 4K/8K Sony/Canon độc quyền',
      'Hỗ trợ Online từ xa qua Ultraview toàn quốc',
      'Kiểm tra xem trước ảnh/video trước khi thanh toán',
      'Không cứu được - Hoàn toàn không mất phí'
    ],
    iconName: 'Camera'
  },
  {
    id: 'dev-hdd',
    name: 'Ổ cứng cơ HDD (PC, Laptop, Ổ di động gắn ngoài)',
    badge: 'Phổ biến nhất',
    isPopular: true,
    basePrice: 600000,
    priceEstimate: 'Từ 600.000 đ',
    unit: 'Trọn gói kiểm tra & xử lý',
    suitable: 'Phù hợp cho ổ cứng WD, Seagate, Toshiba, Hitachi bị xóa nhầm, ghost nhầm, bad sector, nhận chậm hoặc phát tiếng kêu.',
    timeEstimate: '2 - 12 giờ',
    features: [
      'Kiểm tra chẩn đoán lỗi MIỄN PHÍ tại chỗ hoặc qua mạng',
      'Phục hồi tài liệu văn phòng, đồ họa, source code, kế toán',
      'Can thiệp cứu ổ cứng bị bad sector nặng, treo máy',
      'Bảo mật thông tin khách hàng tuyệt đối',
      'Xem trước dữ liệu rồi mới thanh toán'
    ],
    iconName: 'HardDrive'
  },
  {
    id: 'dev-usb-flash',
    name: 'USB Flash Drive & Ổ cứng di động nhỏ gọn',
    badge: 'Lấy ngay',
    basePrice: 300000,
    priceEstimate: 'Từ 300.000 đ',
    unit: 'Xử lý nhanh lấy ngay',
    suitable: 'Dành cho USB bị đòi format, virus làm ẩn file, gãy chân cắm hoặc không nhận tín hiệu.',
    timeEstimate: '15 - 45 phút',
    features: [
      'Xử lý nhanh chóng trong 15 - 30 phút',
      'Khôi phục file Word, Excel, hóa đơn kế toán, PDF',
      'Khử sạch 100% virus ẩn file trên USB',
      'Có thể cứu Online từ xa qua UltraViewer',
      'Chi phí thân thiện, hợp lý'
    ],
    iconName: 'Zap'
  },
  {
    id: 'dev-google-drive',
    name: 'Google Drive, OneDrive & Lưu Trữ Đám Mây',
    badge: 'Độc quyền Cloud',
    basePrice: 500000,
    priceEstimate: 'Từ 500.000 đ',
    unit: 'Xử lý Online từ xa',
    suitable: 'Dành cho tài khoản Google Drive cá nhân hoặc Workspace bị xóa vĩnh viễn trong thùng rác hoặc lỗi đồng bộ.',
    timeEstimate: '1 - 4 giờ',
    features: [
      'Phục hồi file/folder đã xóa sạch trong thùng rác',
      'Xử lý hoàn toàn Online từ xa, không cần gửi máy',
      'Khôi phục thư mục dùng chung (Shared Drive)',
      'Bảo mật thông tin tài khoản an toàn tuyệt đối',
      'Thành công mới thanh toán'
    ],
    iconName: 'FolderCheck'
  },
  {
    id: 'dev-ssd',
    name: 'Ổ cứng thể rắn SSD & M.2 NVMe PCIe',
    badge: 'Chip nhớ cao cấp',
    basePrice: 900000,
    priceEstimate: 'Từ 900.000 đ',
    unit: 'Giải mã chip nhớ & Translator',
    suitable: 'Dành cho SSD Samsung, Kingston, WD, Crucial bị mất firmware, không nhận thiết bị hoặc chập cháy IC nguồn.',
    timeEstimate: '6 - 24 giờ',
    features: [
      'Nạp Loader Microcode SSD chuyên nghiệp',
      'Xử lý SSD báo dung lượng 0MB hoặc tên lạ',
      'Bảo toàn nguyên vẹn cơ sở dữ liệu và tệp tin kế toán',
      'Hỗ trợ SSD chuẩn SATA 3 và M.2 NVMe',
      'Nghiệm thu dữ liệu trước khi nhận phí'
    ],
    iconName: 'Cpu'
  },
  {
    id: 'dev-server-raid',
    name: 'Hệ thống Máy chủ Server, SAN, NAS & Mảng RAID',
    badge: 'Cấp cứu Doanh nghiệp',
    basePrice: 2500000,
    priceEstimate: 'Từ 2.500.000 đ',
    unit: 'Ảo hóa mảng đĩa chuyên sâu',
    suitable: 'Dành cho máy chủ Dell, HP, IBM, Synology hỏng nhiều ổ đĩa, rã mảng RAID 0, 1, 5, 6, 10 hoặc lỗi CSDL MISA/SQL.',
    timeEstimate: '4 - 18 giờ (Ưu tiên 24/7)',
    features: [
      'Hỗ trợ cấp cứu khẩn cấp liên tục 24/7',
      'Ảo hóa mảng đĩa bằng phần mềm an toàn 100%',
      'Cứu toàn bộ CSDL SQL Server, Oracle, ERP, MISA',
      'Ký hợp đồng dịch vụ và NDA cam kết pháp lý',
      'Hỗ trợ xử lý Online hoặc tận nơi tại TP.HCM'
    ],
    iconName: 'Server'
  }
];

export const COST_ESTIMATOR_ADDONS: RecoveryAddon[] = [
  {
    id: 'addon-overwritten',
    label: 'Thuật toán tái ghép nối tệp tin bị ghi đè (Ảnh/Video 📸🎦)',
    price: 300000,
    description: 'Chuyên trị thẻ nhớ hoặc ổ cứng đã bị quay/chụp đè lên dữ liệu cũ.'
  },
  {
    id: 'addon-online-ultraview',
    label: 'Hỗ trợ cứu dữ liệu Online từ xa qua Ultraview (Ngồi tại nhà)',
    price: 0,
    description: 'Miễn phí hỗ trợ kết nối từ xa cho khách hàng ở các tỉnh thành trên toàn quốc.'
  },
  {
    id: 'addon-badsector',
    label: 'Xử lý Bad sector mảng nặng & Fix phân vùng RAW',
    price: 250000,
    description: 'Áp dụng cho ổ đĩa/thẻ nhớ bị đơ, treo máy tính, mất định dạng phân vùng.'
  },
  {
    id: 'addon-cleanroom',
    label: 'Can thiệp Cơ khí & Thay đầu đọc từ (Dành cho ổ cứng kêu lách cách)',
    price: 700000,
    description: 'Áp dụng cho ổ cứng cơ bị rơi rớt va đập, gõ đầu đọc cần mổ đĩa thay thế cơ học.'
  },
  {
    id: 'addon-capacity',
    label: 'Dung lượng lớn đặc biệt (Từ 2TB đến 8TB)',
    price: 350000,
    description: 'Chi phí bù đắp thời gian quét sector chuyên sâu cho thiết bị dung lượng lớn.'
  },
  {
    id: 'addon-cloud-upload',
    label: 'Bàn giao dữ liệu tốc độ cao qua Google Drive / Fshare',
    price: 0,
    description: 'Miễn phí tải lên đám mây để khách hàng ở xa tải về ngay lập tức.'
  }
];

export const FEATURED_CASES: RecoveryCaseItem[] = [
  {
    id: 'case-wedding-sd',
    title: 'Cứu 128GB ảnh cưới & video 4K thẻ SD Sony bị format và chụp đè',
    client: 'Studio Ảnh Cưới Hoàng Gia (Đà Nẵng)',
    category: 'hdd',
    categoryLabel: 'Thẻ Nhớ SD 📸',
    device: 'Thẻ nhớ SD Sony Tough 128GB - Máy ảnh Sony A7 IV',
    summary: 'Thợ phụ lỡ tay format thẻ và bấm chụp đè khoảng 5GB ảnh mới. Thẻ chứa trọn bộ phóng sự cưới của khách VIP ngày thứ 7. Khách hàng liên hệ Thành Phúc Recovery lúc 21h đêm, chúng tôi kết nối Online qua UltraViewer, áp dụng thuật toán tái ghép nối phân mảnh video và cứu lại 100% video tiệc cưới cùng hơn 1.800 file ảnh RAW nguyên vẹn.',
    highlights: [
      'Xử lý hoàn toàn Online từ xa qua Ultraviewer chỉ trong 90 phút',
      'Khôi phục 100% video 4K 10-bit không bị giật lag, tiếng chuẩn xác',
      'Cứu trọn vẹn hơn 1.800 tấm ảnh RAW đuôi .ARW nguyên gốc',
      'Giúp Studio bàn giao file đúng hẹn cho cô dâu chú rể'
    ],
    impact: {
      metric: '100%',
      label: 'Video 4K & Ảnh cưới cứu nguyên vẹn'
    },
    restoredFiles: '115 GB Ảnh RAW & Video 4K'
  },
  {
    id: 'case-hdd-misa',
    title: 'Cứu toàn bộ dữ liệu Kế toán MISA từ ổ cứng HDD WD 2TB bị bad nặng',
    client: 'Công ty Cổ phần Thương Mại & Xuất Nhập Khẩu Nam Á (Hà Nội)',
    category: 'hdd',
    categoryLabel: 'Ổ Cứng HDD',
    device: 'Ổ cứng gắn ngoài WD My Passport 2TB bị nhận chậm, đơ đĩa',
    summary: 'Ổ cứng chứa toàn bộ file sao lưu MISA (.mbk) 8 năm của công ty, cắm vào máy tính làm treo đứng Windows Explorer. Kỹ sư Thành Phúc can thiệp bằng thiết bị đọc sector chuyên dụng, bypass bad blocks và trích xuất thành công 100% tệp tin kế toán trong vòng 4 giờ.',
    highlights: [
      'Cứu trọn vẹn bộ cơ sở dữ liệu kế toán 8 năm tài chính',
      'Khôi phục toàn bộ hợp đồng scan, bảng lương và chứng từ',
      'Thời gian xử lý cấp tốc: 4 giờ đồng hồ',
      'Bàn giao dữ liệu qua Google Drive để khách làm việc ngay'
    ],
    impact: {
      metric: '100%',
      label: 'Dữ liệu kế toán phục hồi'
    },
    restoredFiles: '450 GB Dữ liệu MISA & Chứng từ'
  },
  {
    id: 'case-drive-cloud',
    title: 'Phục hồi toàn bộ dữ liệu Google Drive doanh nghiệp bị xóa vĩnh viễn',
    client: 'Công ty TNHH Truyền Thông Sáng Tạo BlueSky (TP.HCM)',
    category: 'ssd',
    categoryLabel: 'Google Drive Cloud',
    device: 'Tài khoản Google Workspace dung lượng 5TB bị nhân viên cũ xóa sạch thùng rác',
    summary: 'Nhân viên nghỉ việc đã cố tình xóa sạch dữ liệu trên Shared Drive và dọn sạch thùng rác (Empty Trash). Thành Phúc Data Recovery đã can thiệp chuyên sâu khôi phục lại toàn bộ cấu trúc cây thư mục và 3.2TB tệp thiết kế Photoshop, Illustrator và video dựng trong ngày.',
    highlights: [
      'Khôi phục dữ liệu đã dọn sạch thùng rác trên Google Drive',
      'Tái lập nguyên vẹn 100% quyền truy cập và liên kết file',
      'Xử lý hoàn toàn Online qua mạng an toàn tuyệt đối',
      'Hỗ trợ doanh nghiệp thiết lập chính sách bảo vệ dữ liệu chống xóa'
    ],
    impact: {
      metric: '3.2 TB',
      label: 'Dữ liệu thiết kế đám mây phục hồi'
    },
    restoredFiles: '3.2 TB Files Thiết kế & Video'
  },
  {
    id: 'case-drone-cf',
    title: 'Cứu thẻ CFexpress máy quay phim TVC bị lỗi bắt format đĩa',
    client: 'Ekip Quay Phim Quảng Cáo RedDot Media (TP.HCM)',
    category: 'hdd',
    categoryLabel: 'Thẻ CFexpress 🎦',
    device: 'Thẻ CFexpress Type B SanDisk Extreme Pro 512GB máy Canon R5C',
    summary: 'Đang quay TVC bối cảnh ngoài trời thì máy báo lỗi "Card cannot be accessed. Reinsert/change card or format with camera". Rút ra cắm đầu đọc máy tính báo RAW 0 bytes. Thành Phúc Recovery đã can thiệp đọc trực tiếp chip nhớ, cứu lại toàn bộ các shot quay đắt giá trị giá hàng trăm triệu đồng.',
    highlights: [
      'Cứu các cảnh quay TVC quay định dạng Canon Cinema RAW Light',
      'Xử lý lấy ngay tại chỗ trong vòng 2 giờ đồng hồ',
      'Khách hàng nghiệm thu trực tiếp từng khung hình',
      'Không mất bất kỳ shot quay quan trọng nào của nhãn hàng'
    ],
    impact: {
      metric: '512 GB',
      label: 'Dữ liệu quay TVC cứu thành công 100%'
    },
    restoredFiles: '480 GB Video Cinema RAW Light'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'why-meta-verified',
    title: 'Dịch Vụ Meta Đã Xác Minh (Tích Xanh Chính Chủ)',
    description: 'Thành Phúc Data Recovery là thương hiệu được Meta (Facebook) cấp tick xanh xác minh danh tính chính chủ uy tín hàng đầu. Cam kết làm việc trung thực, tận tâm và minh bạch tuyệt đối.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'why-online-nationwide',
    title: 'Hỗ Trợ Online Toàn Quốc Qua UltraViewer 24/7',
    description: 'Dù bạn ở bất kỳ tỉnh thành nào trên cả nước, chỉ cần máy tính kết nối mạng, chúng tôi có thể xử lý cứu dữ liệu từ xa ngay lập tức. Khách hàng ngồi tại nhà giám sát trực tiếp 100% quá trình làm.',
    iconName: 'Globe'
  },
  {
    id: 'why-no-data-no-charge',
    title: 'Chính Sách Vàng: "Không Cứu Được - Không Mất Phí"',
    description: 'Kiểm tra chẩn đoán lỗi hoàn toàn MIỄN PHÍ. Khách hàng xem trước file ảnh, video, dữ liệu và kiểm tra độ nguyên vẹn. Chỉ khi dữ liệu lấy lại đúng yêu cầu mới thanh toán.',
    iconName: 'CheckCircle2'
  },
  {
    id: 'why-community-admin',
    title: 'Admin Group Cộng Đồng KPDL & 24K+ Người Theo Dõi',
    description: 'Là Admin sáng lập Group Cộng đồng Khôi Phục Dữ Liệu Thẻ Nhớ lớn nhất mạng xã hội và fanpage hơn 24.000 người theo dõi, được đông đảo anh em thợ ảnh và doanh nghiệp tin tưởng suốt 12 năm qua.',
    iconName: 'Award'
  },
  {
    id: 'why-speed-express',
    title: 'Tốc Độ Xử Lý Nhanh Chóng - Lấy Ngay Trong Ngày',
    description: 'Với thẻ nhớ, USB và ổ cứng xóa nhầm, thời gian xử lý chỉ từ 15 đến 60 phút. Các ca cấp cứu sự cố gấp được ưu tiên xử lý xuyên đêm 24/7 để bạn kịp giao file cho khách.',
    iconName: 'Clock'
  },
  {
    id: 'why-video-algorithm',
    title: 'Công Nghệ Tái Ghép Nối Phân Mảnh Video 4K/8K Bản Quyền',
    description: 'Sở hữu giải pháp chuyên sâu phục hồi các tệp video quay phim dung lượng lớn bị hỏng header, thẻ bị format đè, đảm bảo video mở lên phát mượt mà, đồng bộ hoàn hảo hình và tiếng.',
    iconName: 'Film'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Anh Tuấn Nguyễn (Studio Wedding Sài Gòn)',
    position: 'Nhiếp Ảnh Gia & Chủ Studio',
    company: 'Tuấn Nguyễn Wedding Studio - TP.HCM',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Tối thứ 7 đi chụp tiệc cưới về, thợ phụ format nhầm thẻ SD Sony 128GB rồi còn bấm chụp đè lên vài tấm. Cả đêm hai vợ chồng mất ngủ vì đó là đám cưới khách VIP. 2h sáng nhắn tin cho anh Phúc, anh mở Ultraview cứu Online từ xa. Đến 4h sáng toàn bộ video 4K và hơn 2.000 tấm ảnh RAW đã được lấy lại nguyên vẹn không thiếu một tấm nào. Thực sự đội ơn anh Phúc rất nhiều!',
    rating: 5,
    projectType: 'Cứu Thẻ SD Sony Format & Chụp Đè'
  },
  {
    id: 'test-2',
    name: 'Chị Mai Lan',
    position: 'Kế Toán Trưởng',
    company: 'Công ty TNHH Vận Tải & Thương Mại Hải Đăng (Đà Nẵng)',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    content: 'Ổ cứng ngoài chứa toàn bộ dữ liệu phần mềm MISA 7 năm cắm vào máy tính kêu tít tít rồi đơ luôn. Mình ở tận Đà Nẵng, gửi chuyển phát nhanh vào cho Thành Phúc Recovery tại TP.HCM. Sau đúng 1 ngày, anh Phúc gọi điện báo đã cứu xong 100% CSDL MISA và up lên Drive cho mình tải về. Làm việc cực kỳ uy tín, chi phí rất hợp lý!',
    rating: 5,
    projectType: 'Cứu Ổ Cứng HDD Kế Toán MISA'
  },
  {
    id: 'test-3',
    name: 'Đạo Diễn Hoàng Bách',
    position: 'Nhà Làm Phim Độc Lập',
    company: 'Ekip Sản Xuất Phim Ngắn & TVC BáchFilm (Hà Nội)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    content: 'Thẻ CFexpress quay cảnh action cho MV ca nhạc bị lỗi không nhận diện được. Anh em thợ trong nghề giới thiệu ngay kênh Thành Phúc Data Recovery vì biết anh là Admin Group cứu dữ liệu thẻ nhớ uy tín nhất. Kết quả cứu lại trọn vẹn từng file quay RAW không bị hỏng một khung hình nào. Rất khuyên anh em làm phim nên lưu số anh Phúc!',
    rating: 5,
    projectType: 'Cứu Thẻ Nhớ CFexpress Máy Quay Phim'
  }
];

export const FAQ_DATA = [
  {
    question: 'Tôi ở tỉnh xa (Hà Nội, Đà Nẵng, Cần Thơ...) thì cứu dữ liệu như thế nào?',
    answer: 'RẤT ĐƠN GIẢN VÀ NHANH CHÓNG. Với các trường hợp lỗi phần mềm (xóa nhầm, format nhầm thẻ nhớ/ổ cứng, thẻ nhớ bắt format RAW, ghi đè file ảnh/video, phục hồi Google Drive): Bạn chỉ cần bật máy tính có kết nối mạng, cài phần mềm điều khiển từ xa UltraViewer hoặc TeamViewer và gửi ID/Pass qua Zalo 0935.473.890. Anh Phúc sẽ kết nối xử lý trực tiếp ngay tại nhà bạn trong 30 - 60 phút. Với trường hợp ổ cứng bị hỏng vật lý nặng (rơi vỡ, kêu cạch cạch): Bạn bọc xốp chống sốc cẩn thận và gửi chuyển phát nhanh (Viettel Post, GHTK, EMS) vào văn phòng tại TP.HCM.'
  },
  {
    question: 'Thẻ nhớ máy ảnh bị lỡ tay format hoặc chụp đè lên thì có cứu lại được không?',
    answer: 'CÓ THỂ CỨU ĐƯỢC NẾU XỬ LÝ ĐÚNG CÁCH. QUAN TRỌNG NHẤT: Khi phát hiện mất file hoặc lỡ format, bạn hãy RÚT NGAY THẺ NHỚ RA KHỎI MÁY ẢNH VÀ KHÔNG CHỤP THÊM BẤT KỲ TẤM NÀO NỮA. Thành Phúc Data Recovery sở hữu thuật toán chuyên sâu quét phân mảnh nhị phân độc quyền, có thể ghép nối và tái tạo lại các file ảnh RAW (.CR2, .CR3, .ARW, .NEF) và video 4K/8K (.MP4, .MOV, .ProRes) bị đè một phần một cách hoàn hảo.'
  },
  {
    question: 'Nếu kiểm tra mà không cứu được dữ liệu thì tôi có mất phí gì không?',
    answer: 'HOÀN TOÀN KHÔNG MẤT PHÍ. Thành Phúc Data Recovery áp dụng chính sách nhất quán: "Không Cứu Được Dữ Liệu - Hoàn Toàn Không Mất Phí". Quá trình kiểm tra chẩn đoán ban đầu là miễn phí 100%. Quý khách được mở xem thử trực tiếp các file ảnh, video, dữ liệu phục hồi, chỉ khi dữ liệu lấy lại đúng yêu cầu thì mới tiến hành thanh toán.'
  },
  {
    question: 'Dữ liệu cá nhân, ảnh gia đình và tài liệu của tôi có được bảo mật không?',
    answer: 'CAM KẾT BẢO MẬT TUYỆT ĐỐI 100%. Thành Phúc Data Recovery là dịch vụ đã được Meta xác minh chính chủ (Tích xanh uy tín). Mọi hình ảnh, video cá nhân và tài liệu kinh doanh của quý khách đều được giữ kín tuyệt đối theo đạo đức nghề nghiệp và cam kết bảo mật. Khách hàng ngồi tại nhà qua UltraViewer có thể trực tiếp giám sát từng thao tác kỹ thuật trên màn hình.'
  },
  {
    question: 'Thời gian cứu dữ liệu thường mất bao lâu?',
    answer: 'Với các ca cứu Online từ xa (xóa nhầm, format, lỗi thẻ nhớ máy ảnh, USB, Google Drive): Thời gian xử lý rất nhanh, chỉ từ 15 đến 60 phút là xong và bạn có thể nhận file ngay. Với các ca ổ cứng cơ dung lượng lớn bị bad sector hoặc lỗi phần cứng nặng: Thường từ 2 đến 12 giờ làm việc.'
  },
  {
    question: 'Làm thế nào để liên hệ nhanh nhất với anh Thành Phúc?',
    answer: 'Quý khách chỉ cần gọi điện thoại hoặc nhắn tin Zalo trực tiếp đến số Hotline 24/7: 0935.473.890. Ngoài ra quý khách có thể nhắn tin qua Facebook cá nhân: www.facebook.com/ThanhphucRecover hoặc Fanpage chính thức: www.facebook.com/Khoiphucdulieuthenho/.'
  }
];

export const TECH_STANDARDS = [
  { name: 'Meta Verified', desc: 'Dịch vụ đã xác minh chính chủ có tích xanh' },
  { name: 'Group KPDL 47.3K TV', desc: 'Cộng đồng cứu dữ liệu lớn nhất MXH' },
  { name: 'Fanpage 26K Follower', desc: 'Thành Phúc Data Recovery chính chủ' },
  { name: 'Facebook 20K Follower', desc: 'Admin Thành Phúc trực tiếp hỗ trợ' },
  { name: 'Online Toàn Quốc 24/7', desc: 'Xử lý từ xa qua Ultraview lấy ngay' },
  { name: 'No Data - No Charge', desc: 'Không cứu được - Hoàn toàn không mất phí' },
  { name: 'Chuyên Gia Thẻ Nhớ 📸🎦', desc: 'Thuật toán ghép video 4K/8K bản quyền' },
  { name: 'Bảo Mật Trực Tiếp 100%', desc: 'Giám sát trực tiếp quá trình làm' },
];
