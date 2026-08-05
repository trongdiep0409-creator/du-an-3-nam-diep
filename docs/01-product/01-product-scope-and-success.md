# Titan OS — Product Scope and Success Criteria

> Tài liệu này chốt phạm vi MVP, phân loại capability và xác định tiêu chí thành công.
> Nguồn sự thật: toàn bộ tài liệu trong docs/00-context và docs/01-product/00-product-vision.md.

---

## 1. Mục Đích Tài Liệu

Tài liệu này dùng để:

- **Chốt phạm vi MVP**: Xác định rõ capability nào bắt buộc có trong MVP.
- **Ngăn scope creep**: Thiết lập quy tắc kiểm soát để tính năng mới không tràn vào MVP.
- **Phân biệt chức năng bắt buộc và chức năng tương lai**: Phân loại Must, Should, Later và Out.
- **Xác định điều kiện để chuyển sang giai đoạn thiết kế kỹ thuật**: Xác định MVP Release Gates trước khi chuyển sang Product Flow và Information Architecture.

Không lặp lại toàn bộ Product Vision. Tài liệu này chỉ tập trung vào phạm vi và tiêu chí thành công.

---

## 2. Vấn Đề MVP Phải Giải Quyết

MVP phải giải quyết một vòng lặp duy nhất:

1. Người dùng biết hôm nay cần làm gì
2. Người dùng thực hiện nhiệm vụ
3. Người dùng ghi nhận phiên học
4. Người dùng nộp output và evidence
5. Hệ thống tạo đánh giá
6. Người dùng biết điểm yếu
7. Nhiệm vụ tiếp theo được điều chỉnh
8. Cuối tuần có đánh giá tổng hợp

Mọi capability trong MVP phải phục vụ trực tiếp vòng lặp này. Capability nào không phục vụ vòng lặp này thì không thuộc phạm vi MVP.

---

## 3. Người Dùng Và Điều Kiện Sử Dụng

- **Một người dùng duy nhất**: Titan OS phục vụ một người dùng duy nhất trong giai đoạn đầu.
- **Sử dụng hằng ngày**: Titan OS được thiết kế để dùng mỗi ngày.
- **Chủ nhật đến Thứ 6**: Lịch học cố định, Thứ 7 nghỉ.
- **Thời gian sử dụng chính từ 20:00 đến 23:30**: Mỗi buổi 3 giờ 30 phút, gồm Tiếng Anh, Chuyên môn và AI Lab.
- **Sử dụng trong ít nhất 3 năm**: Kiến trúc và dữ liệu phải đủ dùng trong tối thiểu 3 năm.
- **Không yêu cầu team collaboration**: Không cần tính năng cộng tác đội nhóm.
- **Không yêu cầu SaaS**: Không cần triển khai dạng dịch vụ đám mây đa người dùng.
- **Không yêu cầu social**: Không cần tính năng mạng xã hội.
- **Dữ liệu thuộc về người dùng**: Local-first, người dùng kiểm soát toàn bộ dữ liệu.

---

## 4. Phạm Vi MVP Bắt Buộc

### Career Context

- **Hồ sơ nghề nghiệp**: Lưu thông tin nghề nghiệp của người dùng.
- **Mục tiêu 1 năm, 2 năm và 3 năm**: Lưu mục tiêu theo các mốc thời gian.
- **Điểm mạnh**: Lưu danh sách điểm mạnh của người dùng.
- **Điểm yếu**: Lưu danh sách điểm yếu của người dùng.
- **Lịch học**: Lưu lịch học, khung giờ và phân bổ thời gian.

### Roadmap Cơ Bản

- **Mục tiêu hiện tại**: Xác định mục tiêu đang tập trung.
- **Trọng tâm hiện tại**: Xác định trọng tâm học tập hiện tại.
- **Kết quả cần đạt**: Xác định kết quả cụ thể cần đạt.
- **Thứ tự ưu tiên**: Sắp xếp thứ tự ưu tiên các năng lực.
- **Điều chỉnh roadmap**: Cho phép điều chỉnh dựa trên dữ liệu tiến bộ.

Không thiết kế hệ thống roadmap nhiều tầng phức tạp trong Task này.

### Daily Mission

- **Nhiệm vụ hôm nay**: Đề xuất hoặc tạo nhiệm vụ cho ngày.
- **Mục tiêu**: Xác định mục tiêu của nhiệm vụ.
- **Output bắt buộc**: Xác định output cần tạo.
- **Evidence bắt buộc**: Xác định bằng chứng cần có.
- **Tiêu chí hoàn thành**: Xác định tiêu chí rõ ràng để coi là hoàn thành.

### Learning Session

- **Thời gian bắt đầu**: Ghi nhận thời gian bắt đầu phiên học.
- **Thời gian kết thúc**: Ghi nhận thời gian kết thúc phiên học.
- **Nội dung thực hiện**: Ghi nhận nội dung đã thực hiện.
- **Ghi chú**: Ghi chú thêm về phiên học.
- **Kết quả**: Ghi nhận kết quả của phiên học.

### Daily Report

- **Nhiệm vụ đã thực hiện**: Liệt kê nhiệm vụ đã thực hiện.
- **Output**: Ghi nhận output đã tạo.
- **Evidence**: Ghi nhận bằng chứng đã có.
- **Khó khăn**: Ghi nhận khó khăn gặp phải.
- **Tự đánh giá**: Người dùng tự đánh giá kết quả.
- **Điểm cần cải thiện**: Ghi nhận điểm cần cải thiện.

### Review Workflow

- **Đánh giá output**: Đánh giá output đã nộp.
- **Xác định đạt hoặc chưa đạt**: Xác định trạng thái đạt hoặc chưa đạt.
- **Chỉ ra điểm yếu**: Chỉ ra điểm yếu cụ thể.
- **Đề xuất hành động tiếp theo**: Đề xuất hành động cụ thể.
- **Yêu cầu làm lại khi cần**: Yêu cầu làm lại khi output chưa đạt.

Review Workflow là bắt buộc trong MVP.

Không mặc định toàn bộ workflow này phải được AI tự động ngay từ phiên bản đầu. Workflow đánh giá có thể hoạt động ở mức thủ công trước, tích hợp AI sau.

### Weekly Review

- **Tổng hợp nhiệm vụ**: Tổng hợp nhiệm vụ trong tuần.
- **Tổng hợp output**: Tổng hợp output đã tạo trong tuần.
- **Tổng hợp evidence**: Tổng hợp bằng chứng trong tuần.
- **Điểm yếu lặp lại**: Xác định điểm yếu lặp lại.
- **Tiến độ**: Đánh giá tiến độ so với lộ trình.
- **Kế hoạch tuần tiếp theo**: Điều chỉnh kế hoạch tuần sau.

### Skill Tracking Cơ Bản

- **Kỹ năng đang học**: Theo dõi kỹ năng đang học.
- **Trạng thái hiện tại**: Ghi trạng thái hiện tại của kỹ năng.
- **Evidence liên quan**: Liên kết bằng chứng với kỹ năng.
- **Điểm yếu**: Ghi điểm yếu của kỹ năng.
- **Lịch sử đánh giá**: Lưu lịch sử đánh giá kỹ năng.

### Backup Và Export Cơ Bản

- **Có khả năng sao lưu dữ liệu**: Người dùng có thể tạo bản sao dữ liệu.
- **Có khả năng phục hồi dữ liệu**: Người dùng có thể khôi phục dữ liệu từ bản sao.
- **Không khóa dữ liệu vào hệ thống**: Dữ liệu không bị giữ trong hệ thống, có thể di chuyển.

Chỉ mô tả Product Requirement. Không quyết định định dạng hoặc công nghệ.

---

## 5. Phạm Vi Sau MVP

### Projects

- **Vì sao chưa bắt buộc trong MVP**: Dự án thực tế cần nền tảng dữ liệu học tập hoạt động trước.
- **Điều kiện phải đạt trước khi triển khai**: Vòng lặp ngày và tuần hoạt động ổn định, có dữ liệu thực tế.
- **Capability MVP cung cấp dữ liệu đầu vào**: Daily Report, Evidence, Skill Tracking cung cấp dữ liệu cho Projects.

### Case Studies

- **Vì sao chưa bắt buộc trong MVP**: Case Study cần dự án hoàn thành và kết quả thực tế.
- **Điều kiện phải đạt trước khi triển khai**: Projects đã hoạt động, có dự án thực tế hoàn thành.
- **Capability MVP cung cấp dữ liệu đầu vào**: Output, Evidence và Projects cung cấp dữ liệu cho Case Studies.

### SOP

- **Vì sao chưa bắt buộc trong MVP**: SOP cần quy trình thực tế được lặp lại nhiều lần.
- **Điều kiện phải đạt trước khi triển khai**: Người dùng đã thực hiện đủ nhiều lần một quy trình để chuẩn hóa.
- **Capability MVP cung cấp dữ liệu đầu vào**: Daily Report và Learning Session cung cấp dữ liệu cho SOP.

### Knowledge Base

- **Vì sao chưa bắt buộc trong MVP**: Kiến thức cần được tích lũy từ quá trình học thực tế.
- **Điều kiện phải đạt trước khi triển khai**: Vòng lặp học tập hoạt động, kiến thức bắt đầu được tích lũy.
- **Capability MVP cung cấp dữ liệu đầu vào**: Learning Session và Daily Report cung cấp dữ liệu cho Knowledge Base.

### Prompt Library

- **Vì sao chưa bắt buộc trong MVP**: Prompt cần được xây dựng từ nhu cầu sử dụng thực tế.
- **Điều kiện phải đạt trước khi triển khai**: Người dùng đã sử dụng AI trong công việc và có prompt hiệu quả.
- **Capability MVP cung cấp dữ liệu đầu vào**: Learning Session và Knowledge Base cung cấp dữ liệu cho Prompt Library.

### Analytics Nâng Cao

- **Vì sao chưa bắt buộc trong MVP**: Analytics nâng cao cần dữ liệu tích lũy đủ dài.
- **Điều kiện phải đạt trước khi triển khai**: Có đủ dữ liệu học tập từ nhiều tuần hoặc nhiều tháng.
- **Capability MVP cung cấp dữ liệu đầu vào**: Toàn bộ dữ liệu Daily Report, Weekly Review và Skill Tracking.

### AI Mentor Tự Động Hoàn Chỉnh

- **Vì sao chưa bắt buộc trong MVP**: AI Mentor có thể triển khai theo giai đoạn, không chặn MVP.
- **Điều kiện phải đạt trước khi triển khai**: Mentor Workflow đã hoạt động, có dữ liệu đánh giá thực tế.
- **Capability MVP cung cấp dữ liệu đầu vào**: Review Workflow, Daily Report và Weekly Review.

### AI Memory Dài Hạn

- **Vì sao chưa bắt buộc trong MVP**: Không thuộc phạm vi MVP, được triển khai ở giai đoạn sau.
- **Điều kiện phải đạt trước khi triển khai**: Có thể bắt đầu khi đã có đủ lịch sử có cấu trúc. Chất lượng memory tăng dần theo lượng dữ liệu được tích lũy.
- **Capability MVP cung cấp dữ liệu đầu vào**: Toàn bộ dữ liệu lịch sử có cấu trúc trong MVP.

### Tích Hợp Dịch Vụ Ngoài

- **Vì sao chưa bắt buộc trong MVP**: Ưu tiên local-first, không phụ thuộc dịch vụ bên ngoài.
- **Điều kiện phải đạt trước khi triển khai**: MVP hoạt động ổn định, có nhu cầu tích hợp rõ ràng.
- **Capability MVP cung cấp dữ liệu đầu vào**: Dữ liệu sản phẩm sẵn sàng chia sẻ.

### Portfolio Nâng Cao

- **Vì sao chưa bắt buộc trong MVP**: Portfolio cần bằng chứng từ dự án thực tế.
- **Điều kiện phải đạt trước khi triển khai**: Có đủ evidence và dự án hoàn thành.
- **Capability MVP cung cấp dữ liệu đầu vào**: Evidence, Projects và Skill Tracking.

---

## 6. Ngoài Phạm Vi

Giai đoạn đầu không làm các thứ sau:

- **Multi-user**: Chỉ phục vụ một người dùng duy nhất.
- **Authentication phục vụ nhiều tài khoản**: Không cần đăng nhập nhiều tài khoản.
- **SaaS**: Không triển khai dạng dịch vụ đám mây.
- **Team Management**: Không quản lý đội nhóm.
- **CRM**: Không quản lý khách hàng.
- **ERP**: Không quản lý tài nguyên doanh nghiệp.
- **Social Network**: Không có mạng xã hội.
- **Marketplace**: Không có chợ ứng dụng hoặc dịch vụ.
- **Public Profile**: Không có hồ sơ công khai.
- **Mobile App riêng**: Không phát triển ứng dụng di động riêng.
- **Realtime Collaboration**: Không cộng tác thời gian thực.
- **Gamification phức tạp**: Không có hệ thống điểm thưởng, huy hiệu phức tạp.
- **Notification đa kênh**: Không gửi thông báo qua nhiều kênh.
- **Knowledge Graph**: Không xây dựng đồ thị tri thức.
- **Event Sourcing**: Không áp dụng kiến trúc event sourcing.
- **Microservices**: Không áp dụng kiến trúc microservices.

Không loại bỏ vĩnh viễn các khả năng trên. Chỉ ghi rằng chúng không phục vụ vấn đề hiện tại và có thể xem xét trong tương lai khi cần.

---

## 7. Ma Trận Phạm Vi Sản Phẩm

| Capability | Vấn đề giải quyết | Kết quả người dùng | Mức ưu tiên | Dependency | Giai đoạn |
|---|---|---|---|---|---|
| Career Context | Chưa có hồ sơ nghề nghiệp tập trung | Biết hồ sơ, điểm mạnh, điểm yếu, lịch học | Must | Không có | MVP |
| Roadmap cơ bản | Chưa biết học theo lộ trình nào | Biết mục tiêu, trọng tâm và thứ tự ưu tiên | Must | Career Context | MVP |
| Daily Mission | Không biết hôm nay cần học gì | Biết nhiệm vụ hôm nay và tiêu chí hoàn thành | Must | Roadmap | MVP |
| Learning Session | Không ghi nhận phiên học | Ghi nhận thời gian và nội dung học | Must | Daily Mission | MVP |
| Daily Report | Không có báo cáo học tập | Nộp báo cáo với output và evidence | Must | Learning Session | MVP |
| Review Workflow | Thiếu người đánh giá output | Nhận đánh giá, biết điểm yếu và hành động tiếp theo | Must | Daily Report | MVP |
| Weekly Review | Không có đánh giá tổng hợp tuần | Biết tiến độ tuần và kế hoạch tuần sau | Must | Daily Report, Review Workflow | MVP |
| Skill Tracking cơ bản | Không biết kỹ năng nào yếu | Theo dõi trạng thái kỹ năng và evidence | Should | Review Workflow | MVP |
| Backup và Export cơ bản | Dữ liệu có thể bị mất hoặc khóa | Sao lưu và phục hồi dữ liệu | Must | Không có | MVP |
| Projects | Dự án và case study bị phân tán | Quản lý dự án thực tế | Later | Evidence, Daily Report | Post-MVP |
| Case Studies | Chưa có case study từ dự án | Xây dựng case study từ kết quả thực tế | Later | Projects | Post-MVP |
| SOP | Quy trình chưa được chuẩn hóa | Xây dựng quy trình chuẩn | Later | Daily Report, Learning Session | Post-MVP |
| Knowledge Base | Kiến thức bị phân tán | Tích lũy kiến thức tập trung | Should | Daily Report, Learning Session | Post-MVP |
| Prompt Library | Prompt không được lưu trữ | Lưu trữ prompt đã xây dựng | Later | Knowledge Base | Post-MVP |
| Analytics nâng cao | Chưa có phân tích sâu | Phân tích dữ liệu học tập | Later | Dữ liệu tích lũy | Future |
| AI Mentor tự động hoàn chỉnh | Mentor Workflow chưa tự động | AI đánh giá, đốc thúc, lập kế hoạch | Later | Review Workflow | Future |
| AI Memory dài hạn | AI chưa hiểu lịch sử người dùng | AI hiểu lịch sử 3 năm | Later | Dữ liệu 3 năm | Future |
| Tích hợp dịch vụ ngoài | Chưa kết nối dịch vụ bên ngoài | Kết nối với dịch vụ khi cần | Later | MVP hoàn chỉnh | Future |
| Portfolio nâng cao | Chưa có portfolio trình diễn | Chứng minh năng lực bằng evidence | Later | Evidence, Projects | Future |
| Multi-user | — | — | Out | — | Out of Scope |
| Authentication nhiều tài khoản | — | — | Out | — | Out of Scope |
| SaaS | — | — | Out | — | Out of Scope |
| Team Management | — | — | Out | — | Out of Scope |
| CRM | — | — | Out | — | Out of Scope |
| ERP | — | — | Out | — | Out of Scope |
| Social Network | — | — | Out | — | Out of Scope |
| Marketplace | — | — | Out | — | Out of Scope |
| Public Profile | — | — | Out | — | Out of Scope |
| Mobile App riêng | — | — | Out | — | Out of Scope |
| Realtime Collaboration | — | — | Out | — | Out of Scope |
| Gamification phức tạp | — | — | Out | — | Out of Scope |
| Notification đa kênh | — | — | Out | — | Out of Scope |
| Knowledge Graph | — | — | Out | — | Out of Scope |
| Event Sourcing | — | — | Out | — | Out of Scope |
| Microservices | — | — | Out | — | Out of Scope |

---

## 8. Luồng MVP Đầu Cuối

### Luồng Ngày

Career Context → Roadmap → Daily Mission → Learning Session → Daily Report → Output/Evidence → Review → Skill Update → Next Mission

Mô tả một ngày sử dụng thực tế:

1. Người dùng mở Titan OS.
2. Titan OS hiển thị mục tiêu và trọng tâm hiện tại từ Career Context và Roadmap.
3. Titan OS đề xuất Daily Mission cho ngày hôm nay với output và evidence bắt buộc.
4. Người dùng bắt đầu Learning Session, ghi nhận thời gian và nội dung thực hiện.
5. Người dùng hoàn thành nhiệm vụ, tạo ra output.
6. Người dùng nộp Daily Report kèm output và evidence.
7. Review Workflow đánh giá output, xác định đạt hoặc chưa đạt, chỉ ra điểm yếu, đề xuất hành động tiếp theo.
8. Skill Tracking cập nhật trạng thái kỹ năng dựa trên kết quả review.
9. Titan OS đề xuất nhiệm vụ ngày mai dựa trên kết quả hôm nay.

### Luồng Cuối Tuần

Daily Data → Weekly Review → Weakness Detection → Roadmap Adjustment → Next Week Plan

Mô tả luồng cuối tuần:

1. Titan OS tổng hợp toàn bộ dữ liệu các ngày trong tuần.
2. Weekly Review tổng hợp nhiệm vụ, output và evidence.
3. Hệ thống phát hiện điểm yếu lặp lại dựa trên dữ liệu cả tuần.
4. Roadmap được điều chỉnh dựa trên tiến độ và điểm yếu.
5. Titan OS đề xuất kế hoạch tuần tiếp theo.

Không thiết kế database hoặc API trong Task này.

---

## 9. Phân Biệt Mentor Workflow Và AI Mentor

### Mentor Workflow

Là nghiệp vụ sản phẩm bắt buộc trong MVP:

- **Nhận báo cáo**: Nhận Daily Report từ người dùng.
- **Đánh giá output**: Đánh giá output đã nộp.
- **Xác định đạt hoặc chưa đạt**: Xác định trạng thái đạt hoặc chưa đạt.
- **Chỉ ra điểm yếu**: Chỉ ra điểm yếu cụ thể.
- **Đưa hành động tiếp theo**: Đề xuất hành động cụ thể.

Mentor Workflow có thể hoạt động ở mức thủ công hoặc bán tự động trong MVP. Người dùng hoặc quy trình đánh giá thủ công có thể đảm nhận vai trò này trong giai đoạn đầu.

### AI Mentor Automation

Là mức tự động hóa của Mentor Workflow.

- Có thể triển khai theo giai đoạn.
- Không được để việc chưa tích hợp AI làm chặn toàn bộ MVP.
- Không làm giảm vai trò dài hạn của AI Mentor.

AI Mentor Automation sẽ được nâng cấp dần: từ hỗ trợ đề xuất, đến đánh giá tự động, đến đầy đủ 5 vai trò mentor, reviewer, coach, examiner và planner.

---

## 10. Functional Success Criteria

MVP được coi là hoạt động khi người dùng có thể hoàn thành toàn bộ chu trình:

- **Thiết lập Career Context**: Người dùng có thể nhập và lưu hồ sơ nghề nghiệp, mục tiêu, điểm mạnh, điểm yếu và lịch học. Kết quả quan sát được: hồ sơ xuất hiện và có thể xem lại.
- **Xem mục tiêu và trọng tâm hiện tại**: Người dùng có thể xem mục tiêu 1 năm, 2 năm, 3 năm và trọng tâm hiện tại. Kết quả quan sát được: thông tin hiển thị rõ ràng.
- **Nhận hoặc tạo Daily Mission**: Người dùng có thể nhận đề xuất hoặc tự tạo nhiệm vụ cho ngày. Kết quả quan sát được: nhiệm vụ có mục tiêu, output bắt buộc, evidence bắt buộc và tiêu chí hoàn thành.
- **Ghi Learning Session**: Người dùng có thể ghi phiên học với thời gian bắt đầu, kết thúc, nội dung và kết quả. Kết quả quan sát được: phiên học được lưu và hiển thị.
- **Nộp Daily Report**: Người dùng có thể nộp báo cáo hằng ngày. Kết quả quan sát được: báo cáo được lưu trong hệ thống.
- **Đính kèm hoặc tham chiếu output**: Người dùng có thể đính kèm hoặc tham chiếu output trong báo cáo. Kết quả quan sát được: output được lưu cùng báo cáo.
- **Ghi evidence**: Người dùng có thể ghi bằng chứng năng lực. Kết quả quan sát được: evidence được lưu và liên kết.
- **Nhận kết quả review**: Người dùng nhận được kết quả đánh giá output. Kết quả quan sát được: có trạng thái đạt hoặc chưa đạt.
- **Biết điểm yếu**: Người dùng biết được điểm yếu cụ thể. Kết quả quan sát được: điểm yếu được chỉ ra rõ ràng.
- **Biết hành động tiếp theo**: Người dùng biết hành động cụ thể cần thực hiện. Kết quả quan sát được: hành động được đề xuất.
- **Hoàn thành Weekly Review**: Người dùng có thể hoàn thành đánh giá tuần. Kết quả quan sát được: báo cáo tuần được lưu.
- **Điều chỉnh kế hoạch tuần sau**: Kế hoạch tuần sau được điều chỉnh dựa trên dữ liệu tuần này. Kết quả quan sát được: kế hoạch tuần sau phản ánh kết quả tuần trước.
- **Backup dữ liệu**: Người dùng có thể tạo bản sao dữ liệu. Kết quả quan sát được: file backup được tạo.
- **Phục hồi dữ liệu từ backup**: Người dùng có thể khôi phục dữ liệu từ bản sao. Kết quả quan sát được: dữ liệu được khôi phục đầy đủ.

Mỗi tiêu chí phải có kết quả quan sát được, không đánh giá theo cảm tính.

---

## 11. Product Success Metrics

### Adoption Metrics

- **Số ngày sử dụng trong tuần**: Số ngày người dùng mở và sử dụng Titan OS trong tuần.
- **Tỷ lệ ngày có Daily Report**: Số ngày có báo cáo hằng ngày chia cho số ngày học.
- **Tỷ lệ tuần có Weekly Review**: Số tuần có đánh giá tổng hợp chia cho tổng số tuần.

### Execution Metrics

- **Tỷ lệ Daily Mission hoàn thành**: Số nhiệm vụ hoàn thành chia cho số nhiệm vụ được giao.
- **Số output được tạo**: Tổng số output người dùng tạo ra.
- **Số evidence được ghi nhận**: Tổng số bằng chứng năng lực được ghi nhận.

### Learning Metrics

- **Số điểm yếu được phát hiện**: Số điểm yếu được chỉ ra trong quá trình review.
- **Số điểm yếu được khắc phục**: Số điểm yếu đã được khắc phục theo thời gian.
- **Thay đổi trạng thái kỹ năng**: Sự thay đổi mức độ thành thạo của kỹ năng theo thời gian.
- **Mức độ bám roadmap**: Mức độ người dùng đi đúng lộ trình đã đề ra.

### Mentor Metrics

- **Số review tạo ra hành động cụ thể**: Số đánh giá dẫn đến hành động cụ thể.
- **Số lần yêu cầu làm lại có lý do rõ ràng**: Số lần yêu cầu làm lại kèm lý do và tiêu chí rõ ràng.
- **Số lần điều chỉnh nhiệm vụ dựa trên dữ liệu**: Số lần nhiệm vụ được điều chỉnh dựa trên dữ liệu thực tế.

### Reliability Metrics

- **Số lần mất dữ liệu**: Số lần dữ liệu bị mất mà không thể phục hồi.
- **Khả năng backup**: Mức độ dễ dàng tạo bản sao dữ liệu.
- **Khả năng restore**: Mức độ dễ dàng phục hồi dữ liệu từ bản sao.
- **Tính đầy đủ của dữ liệu**: Mức độ dữ liệu được lưu đầy đủ, không bị thiếu.

Không tự đặt mục tiêu số cứng trong Task này.

### Phân loại Metric

- **Metric bắt buộc thu thập ngay**: Adoption Metrics, Execution Metrics, Reliability Metrics.
- **Metric chỉ đo sau khi có đủ dữ liệu**: Learning Metrics, Mentor Metrics (cần dữ liệu tích lũy).
- **Metric cần xác định baseline**: Tất cả metric cần có baseline từ dữ liệu thực tế trước khi đặt mục tiêu.

---

## 12. MVP Release Gates

### Product Gate

- **Vòng lặp ngày hoàn chỉnh**: Người dùng có thể hoàn thành toàn bộ chu trình ngày từ nhiệm vụ đến review.
- **Vòng lặp tuần hoàn chỉnh**: Người dùng có thể hoàn thành Weekly Review và điều chỉnh kế hoạch.
- **Mọi chức năng đều phục vụ Product Vision**: Không có chức năng ngoài phạm vi tầm nhìn.

### Data Gate

- **Dữ liệu quan trọng được lưu**: Dữ liệu học tập quan trọng được lưu trữ đầy đủ.
- **Output và evidence không bị mất**: Output và bằng chứng được giữ an toàn.
- **Có backup và restore**: Người dùng có thể sao lưu và phục hồi dữ liệu.

### Quality Gate

- **Không có lỗi chặn vòng lặp chính**: Không có lỗi làm gián đoạn chu trình ngày và tuần.
- **Trạng thái loading, empty và error được xử lý**: Mọi trạng thái giao diện được xử lý rõ ràng.
- **Có thể sử dụng liên tục trong nhiều tuần**: Hệ thống ổn định khi dùng lâu dài.

### Decision Gate

- **Dữ liệu tạo ra được hành động tiếp theo**: Mọi dữ liệu thu được đều dẫn đến hành động cụ thể.
- **Review chỉ ra điểm yếu cụ thể**: Đánh giá chỉ ra điểm yếu rõ ràng, có căn cứ.
- **Roadmap có thể được điều chỉnh**: Lộ trình có thể thay đổi dựa trên dữ liệu tiến bộ.

Đây chỉ là yêu cầu sản phẩm. Không thiết kế test kỹ thuật trong Task này.

---

## 13. Quy Tắc Kiểm Soát Scope

Mỗi tính năng mới phải trả lời được các câu hỏi sau:

1. **Nó giải quyết vấn đề nào?** Vấn đề phải thuộc phạm vi vấn đề đã xác định.
2. **Nó phục vụ bước nào trong vòng lặp cốt lõi?** Phải chỉ rõ bước trong vòng lặp ngày hoặc tuần.
3. **Nó tạo dữ liệu, output, evidence hay quyết định gì?** Phải tạo ra ít nhất một trong các giá trị này.
4. **Không có nó thì MVP có thất bại không?** Nếu MVP vẫn hoạt động, tính năng không thuộc MVP.
5. **Có thể trì hoãn mà không phá vỡ trải nghiệm không?** Nếu có thể trì hoãn, chuyển sang Later hoặc Future.

Nếu không trả lời rõ, tính năng phải được đưa vào Later hoặc Out.

---

## 14. Mâu Thuẫn Và Câu Hỏi Mở

### Nội dung trùng lặp

- Product Vision và 01-product-context.md có một số nội dung trùng lặp về danh sách capability. Đây là sự lặp lại có chủ đích để mỗi tài liệu tự đứng độc lập được, không phải mâu thuẫn.
- Mục 6 (Trải nghiệm hằng ngày) trong Product Vision và Mục 8 (Luồng MVP) trong tài liệu này có cấu trúc tương đồng. Không mâu thuẫn, tài liệu này chi tiết hơn ở mức phạm vi.

### Điểm chưa rõ

- Định dạng cụ thể của Output và Evidence: Chưa xác định cách ghi nhận output và evidence (đường dẫn, mô tả, file đính kèm) — cần làm rõ ở giai đoạn thiết kế.
- Chi tiết các bước Roadmap: Chưa xác định chi tiết cách chia nhỏ lộ trình 3 năm thành roadmap thực thi.

### Quyết định CTO đã được giải quyết

- Cơ chế đề xuất Daily Mission: Đã được CTO chốt — Daily Mission hoạt động bán tự động theo quy tắc, không phụ thuộc AI API trong MVP.
- Cách thức thực hiện Review Workflow: Đã được CTO chốt — Review Workflow hoạt động thủ công có cấu trúc, có thể dùng AI bên ngoài hỗ trợ nhưng không phụ thuộc API.
- Tiêu chí đánh giá "đạt" của output: Đã được CTO chốt — nhiệm vụ chỉ đánh dấu Đạt khi có đủ output, đủ evidence, đạt mọi tiêu chí hoàn thành và review đã hoàn tất.
- Mức độ chi tiết của Skill Tracking: Đã được CTO chốt — Skill Tracking dùng ba trạng thái: Chưa bắt đầu, Đang học, Đã chứng minh. Không dùng điểm số, level, ranking hay gamification trong MVP.
- Cấu trúc nhiệm vụ trong ngày: Đã được CTO chốt — một ngày có đúng một Primary Mission và tối đa hai Supporting Missions.
- Kết quả review: Đã được CTO chốt — chỉ dùng ba kết quả: Đạt, Cần làm lại, Bị chặn.

### Mâu thuẫn giữa thứ tự ưu tiên và trải nghiệm cốt lõi

- Product Vision đặt "Tích hợp AI Mentor" ở vị trí 7 trong thứ tự ưu tiên, nhưng trải nghiệm cốt lõi hằng ngày (bước 6 — Nhận đánh giá) cần Mentor Workflow hoạt động ngay trong MVP.
- Đề xuất xử lý: Tách Mentor Workflow (bắt buộc, có thể thủ công) khỏi AI Mentor Automation (ưu tiên sau). Mentor Workflow phải hoạt động ở mức tối thiểu trong MVP, AI Mentor Automation là mục tiêu nâng cấp dần.

Không tự sửa các tài liệu nguồn ngoài chỉnh sửa newline đã được yêu cầu. Đề xuất cách xử lý nhưng chờ CTO review.

---

## 15. Kết Luận Phạm Vi

### Định Nghĩa MVP

Titan OS MVP là hệ thống giúp một người dùng duy nhất hoàn thành vòng lặp học tập hằng ngày — biết nhiệm vụ, thực hiện, ghi nhận output và evidence, nhận đánh giá, biết điểm yếu — và vòng lặp hằng tuần — tổng hợp, phát hiện điểm yếu, điều chỉnh kế hoạch — với dữ liệu thuộc về người dùng và có khả năng backup.

### Danh Sách Must

- Career Context
- Roadmap cơ bản
- Daily Mission
- Learning Session
- Daily Report
- Review Workflow
- Weekly Review
- Backup và Export cơ bản

### Should in MVP

- Skill Tracking cơ bản

### Danh Sách Later

- Projects
- Case Studies
- SOP
- Prompt Library
- AI Mentor tự động hoàn chỉnh
- AI Memory dài hạn
- Tích hợp dịch vụ ngoài
- Portfolio nâng cao

### Danh Sách Out

- Multi-user
- Authentication nhiều tài khoản
- SaaS
- Team Management
- CRM
- ERP
- Social Network
- Marketplace
- Public Profile
- Mobile App riêng
- Realtime Collaboration
- Gamification phức tạp
- Notification đa kênh
- Knowledge Graph
- Event Sourcing
- Microservices

### Điều Kiện Chuyển Sang Product Flow Và Information Architecture

MVP được coi là sẵn sàng chuyển sang giai đoạn Product Flow và Information Architecture khi:

- Phạm vi MVP được CTO phê duyệt.
- Danh sách Must được xác nhận không thay đổi.
- Câu hỏi mở trong Mục 14 được trả lời.
- Quyết định về mức độ tự động của Daily Mission và Review Workflow được chốt.
