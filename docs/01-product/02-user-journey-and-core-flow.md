# Titan OS — User Journey and Core Product Flow

> Tài liệu này mô tả hành trình sử dụng thực tế và luồng sản phẩm cốt lõi của Titan OS.
> Nguồn sự thật: toàn bộ tài liệu trong docs/00-context và docs/01-product.
> Các quyết định CTO đã phê duyệt trong Task 03 là bắt buộc trong tài liệu này.

---

## 1. Mục Đích Tài Liệu

Tài liệu này dùng để:

- **Mô tả hành trình thực tế của người dùng**: Từ lần đầu khởi tạo đến khi sử dụng hằng ngày và hằng tuần.
- **Kết nối Product Vision với phạm vi MVP**: Làm rõ mỗi khả năng MVP được vận hành như thế nào trong trải nghiệm thực tế.
- **Xác định các bước đầu vào, hành động, kết quả và trạng thái**: Xác định rõ dữ liệu đầu vào, hành động người dùng, phản hồi hệ thống và kết quả đầu ra.
- **Làm nguồn cho Information Architecture ở Task tiếp theo**: Cung cấp thông tin cần thiết cho Task 05 — Information Architecture và Navigation Model.

Không thiết kế giao diện hoặc kiến trúc kỹ thuật trong Task này.

---

## 2. Nguyên Tắc Hành Trình Người Dùng

- **Người dùng luôn biết hành động tiếp theo**: Mọi trạng thái đều có bước kế tiếp rõ ràng.
- **Một thời điểm chỉ có một trọng tâm chính**: Một ngày có một Primary Mission, tối đa hai Supporting Missions.
- **Output và evidence phải được ghi ngay trong luồng làm việc**: Không tách biệt giữa làm việc và ghi nhận.
- **Review phải dẫn đến quyết định**: Mọi review đều có kết quả rõ ràng: Đạt, Cần làm lại hoặc Bị chặn.
- **Không bắt người dùng nhập lại cùng một dữ liệu**: Mỗi thông tin chỉ nhập một lần.
- **Không tạo dashboard chỉ để hiển thị số liệu**: Số liệu phải phục vụ quyết định.
- **Không phụ thuộc AI để hoàn thành vòng lặp MVP**: MVP hoạt động bán tự động theo quy tắc, AI là nâng cấp sau.
- **Trạng thái lỗi hoặc thiếu dữ liệu phải có hướng xử lý**: Người dùng luôn biết cách tiếp tục.

---

## 3. Hành Trình Tổng Thể

Hành trình của người dùng trải qua 15 giai đoạn:

1. Khởi tạo lần đầu
2. Xác định Career Context
3. Thiết lập mục tiêu và trọng tâm
4. Chuẩn bị tuần
5. Bắt đầu ngày học
6. Thực hiện nhiệm vụ
7. Ghi Learning Session
8. Nộp Daily Report
9. Ghi Output và Evidence
10. Review
11. Cập nhật Skill
12. Tạo nhiệm vụ tiếp theo
13. Weekly Review
14. Điều chỉnh Roadmap
15. Backup định kỳ

Mỗi giai đoạn được mô tả chi tiết với: mục tiêu người dùng, dữ liệu đầu vào, hành động người dùng, hành động hệ thống, kết quả đầu ra và bước tiếp theo.

---

## 4. Day 0 — Khởi Tạo Lần Đầu

### Mục tiêu người dùng

Thiết lập nền tảng dữ liệu cho toàn bộ hành trình học tập.

### Dữ liệu đầu vào

- Thông tin nghề nghiệp cơ bản
- Mục tiêu 1 năm, 2 năm và 3 năm
- Điểm mạnh và điểm yếu
- Lịch học

### Hành động người dùng

1. Nhập Career Context.
2. Xác nhận mục tiêu 1 năm, 2 năm và 3 năm.
3. Nhập điểm mạnh và điểm yếu.
4. Xác nhận lịch học.
5. Chọn trọng tâm hiện tại.
6. Thiết lập trạng thái kỹ năng ban đầu.
7. Tạo tuần đầu tiên.
8. Tạo Daily Mission đầu tiên.

### Hành động hệ thống

- Lưu Career Context.
- Xác nhận mục tiêu hợp lệ.
- Lưu điểm mạnh và điểm yếu.
- Lưu lịch học.
- Tạo trạng thái kỹ năng ban đầu (Chưa bắt đầu).
- Tạo khung tuần đầu tiên.
- Tạo bản nháp Daily Mission đầu tiên dựa trên trọng tâm hiện tại.

### Kết quả đầu ra

- Career Context hoàn chỉnh.
- Tuần đầu tiên sẵn sàng.
- Daily Mission đầu tiên được tạo.

### Bước tiếp theo

- Người dùng xác nhận Daily Mission và bắt đầu ngày học.

### Trường hợp đủ dữ liệu

- Người dùng nhập đầy đủ thông tin, hệ thống tạo tuần và nhiệm vụ đầu tiên.

### Trường hợp bỏ dở giữa chừng

- Dữ liệu đã nhập được lưu dưới dạng bản nháp.
- Người dùng có thể quay lại tiếp tục sau.
- Hệ thống ghi rõ bước còn thiếu trước khi hoàn thành khởi tạo.

### Trường hợp chưa biết trọng tâm

- Người dùng chưa chọn được trọng tâm hiện tại.
- Hệ thống hiển thị các mục tiêu từ Career Goals để hỗ trợ lựa chọn.
- Career Context vẫn được lưu dưới dạng bản nháp.
- Onboarding chưa được hoàn thành khi chưa có trọng tâm.

### Điều kiện để hoàn thành onboarding

- Career Context đã được nhập và lưu.
- Mục tiêu 1 năm, 2 năm và 3 năm đã xác nhận.
- Lịch học đã xác nhận.
- Trạng thái kỹ năng ban đầu đã thiết lập.
- Đã chọn trọng tâm hiện tại.
- Đã tạo bản nháp Primary Mission đầu tiên.

Không thiết kế form hoặc UI trong Task này.

---

## 5. Chuẩn Bị Tuần

### Mục tiêu người dùng

Xác định trọng tâm và kết quả cần đạt cho tuần tới.

### Dữ liệu đầu vào

- Roadmap hiện tại
- Kết quả review tuần trước
- Điểm yếu lặp lại từ tuần trước
- Việc cần làm lại còn tồn tại

### Hành động người dùng

1. Xem mục tiêu hiện tại.
2. Chọn kết quả cần đạt trong tuần.
3. Chọn Primary Focus.
4. Xác định output tuần.
5. Xác định evidence tuần.
6. Tạo khung nhiệm vụ cho các ngày học.

### Hành động hệ thống

- Hiển thị mục tiêu hiện tại và trọng tâm.
- Gợi ý kết quả tuần dựa trên Roadmap và điểm yếu.
- Tạo khung nhiệm vụ cho các ngày trong tuần học.
- Đưa việc cần làm lại từ tuần trước vào khung nhiệm vụ sớm trong tuần.

### Kết quả đầu ra

- Kế hoạch tuần với kết quả cần đạt.
- Khung nhiệm vụ cho từng ngày.

### Bước tiếp theo

- Người dùng bắt đầu Daily Mission của ngày đầu tiên.

Không tạo lịch chi tiết phức tạp trong Task này.

---

## 6. Bắt Đầu Ngày Học

### Mục tiêu người dùng

Biết chính xác hôm nay cần làm gì và bắt đầu học.

### Dữ liệu đầu vào

- Roadmap hiện tại
- Trọng tâm hiện tại
- Nhiệm vụ chưa đạt từ ngày trước
- Hành động tiếp theo trong review gần nhất
- Lịch học hiện tại

### Hành động người dùng

1. Mở Titan OS.
2. Xem trọng tâm hiện tại và kết quả ngày trước.
3. Xem nhiệm vụ cần làm lại (nếu có).
4. Sửa bản nháp Daily Mission nếu cần.
5. Xác nhận Daily Mission.

### Hành động hệ thống

- Hiển thị trọng tâm hiện tại.
- Hiển thị kết quả của ngày trước.
- Hiển thị nhiệm vụ cần làm lại từ ngày trước.
- Tạo bản nháp Daily Mission dựa trên Roadmap, trọng tâm, nhiệm vụ chưa đạt, hành động tiếp theo trong review gần nhất và lịch học.
- Cho phép người dùng sửa nội dung, output bắt buộc, evidence bắt buộc trước khi xác nhận.

### Kết quả đầu ra

- Daily Mission đã được xác nhận với trạng thái Ready.

### Bước tiếp theo

- Người dùng bắt đầu Learning Session.

### Daily Plan

Một ngày học có:

- **Một Primary Mission**: Dành cho trọng tâm chuyên môn chính.
- **Tối đa hai Supporting Missions**: Có thể dùng cho ngoại ngữ, AI Lab hoặc công việc hỗ trợ khác.

Nguyên tắc One Main Focus At A Time vẫn được giữ nguyên.

Không xây hệ thống task management không giới hạn.

### Mỗi Mission phải có

- Mục tiêu
- Output bắt buộc
- Evidence bắt buộc
- Tiêu chí hoàn thành
- Ước lượng thời gian

---

## 7. Thực Hiện Learning Session

### Mục tiêu người dùng

Ghi nhận quá trình thực hiện nhiệm vụ.

### Dữ liệu đầu vào

- Daily Mission đã xác nhận
- Nội dung người dùng đang thực hiện

### Hành động người dùng

1. Bắt đầu phiên học.
2. Ghi nội dung đang làm.
3. Ghi khó khăn hoặc blocker (nếu có).
4. Kết thúc phiên học.
5. Ghi kết quả.

### Hành động hệ thống

- Ghi nhận thời gian bắt đầu.
- Lưu nội dung người dùng ghi.
- Lưu ghi chú và khó khăn.
- Ghi nhận thời gian kết thúc.
- Lưu kết quả phiên học.

### Kết quả đầu ra

- Learning Session với trạng thái Completed.

### Bước tiếp theo

- Người dùng tiếp tục thực hiện nhiệm vụ hoặc chuyển sang lập Daily Report.

### Quy định

- Cho phép nhiều Learning Session phục vụ một Mission.
- Không biến Learning Session thành timer hoặc productivity tracker phức tạp.

---

## 8. Daily Report Và Evidence

### Mục tiêu người dùng

Nộp báo cáo hằng ngày với output và evidence.

### Dữ liệu đầu vào

- Learning Session đã hoàn thành
- Output người dùng đã tạo
- Evidence người dùng có

### Hành động người dùng

1. Chọn Mission đã thực hiện.
2. Tổng hợp Learning Session.
3. Ghi output.
4. Thêm hoặc tham chiếu evidence.
5. Ghi khó khăn.
6. Tự đánh giá.
7. Nộp báo cáo.

### Hành động hệ thống

- Hiển thị Learning Session liên quan đến Mission.
- Hiển thị cảnh báo nếu thiếu output hoặc evidence.
- Cho phép lưu bản nháp.
- Lưu báo cáo với trạng thái Submitted.

### Kết quả đầu ra

- Daily Report ở trạng thái Submitted.
- Output và evidence được ghi nhận.

### Bước tiếp theo

- Review Workflow đánh giá output và evidence.

### Quy định

- Không có output thì không thể hoàn thành Mission.
- Thiếu evidence phải được cảnh báo.
- Có thể lưu bản nháp.
- Báo cáo đã nộp vẫn phải giữ lịch sử nếu được chỉnh sửa.

Chỉ mô tả yêu cầu sản phẩm, không thiết kế lưu trữ.

---

## 9. Review Workflow

Review Workflow hoạt động thủ công có cấu trúc.

Có thể dùng AI bên ngoài để hỗ trợ review, nhưng Titan OS MVP không phụ thuộc API.

Review phải ghi:

- Output được đánh giá
- Evidence được kiểm tra
- Tiêu chí hoàn thành
- Kết quả
- Điểm yếu
- Lý do
- Hành động tiếp theo

Kết quả review chỉ dùng ba trạng thái: Đạt, Cần làm lại, Bị chặn.

### Luồng Đạt

#### Điều kiện

- Có đủ output bắt buộc
- Có đủ evidence bắt buộc
- Đạt mọi tiêu chí hoàn thành
- Review đã được hoàn tất

#### Kết quả

- Mission hoàn thành.
- Evidence được xác nhận.
- Skill có thể được cập nhật.
- Sinh hành động tiếp theo.

#### Bước tiếp theo

- Skill Tracking cập nhật trạng thái kỹ năng.
- Hệ thống gợi ý hành động tiếp theo.
- Tạo bản nháp nhiệm vụ ngày sau.

### Luồng Cần Làm Lại

#### Điều kiện

- Output chưa đạt
- Evidence chưa đủ
- Một hoặc nhiều tiêu chí chưa đạt

#### Kết quả

- Ghi lý do.
- Ghi điểm yếu.
- Ghi tiêu chí cần sửa.
- Tạo hành động tiếp theo.
- Đưa việc làm lại vào bản nháp ngày tiếp theo.

#### Bước tiếp theo

- Bản nháp ngày sau bao gồm việc làm lại.
- Người dùng sửa và thực hiện lại.

### Luồng Bị Chặn

#### Điều kiện

- Phụ thuộc bên ngoài.
- Thiếu quyền truy cập.
- Thiếu tài nguyên.
- Có vấn đề ngăn không thể tiếp tục.

#### Kết quả

- Ghi blocker.
- Ghi hành động gỡ blocker.
- Không tự động đánh dấu Đạt hoặc Cần làm lại.
- Đề xuất nhiệm vụ thay thế nếu cần.

#### Bước tiếp theo

- Nếu có nhiệm vụ thay thế, chuyển sang nhiệm vụ đó.
- Nếu không, giữ Mission ở trạng thái Blocked cho đến khi gỡ blocker.

---

## 10. Daily Close

### Mục tiêu người dùng

Kết thúc ngày học và biết chính xác bước tiếp theo.

### Dữ liệu đầu vào

- Kết quả review của các Mission trong ngày
- Daily Report đã nộp

### Hành động hệ thống

Cuối ngày phải tạo được:

- Trạng thái các Mission.
- Output đã tạo.
- Evidence đã xác nhận.
- Điểm yếu được phát hiện.
- Blocker còn tồn tại.
- Hành động tiếp theo.
- Bản nháp nhiệm vụ ngày sau.

### Quy định

- Không tạo nhiệm vụ ngày sau khi chưa có kết quả review, trừ khi Mission bị chặn và có nhiệm vụ thay thế rõ ràng.

### Bước tiếp theo

- Người dùng xem bản nháp nhiệm vụ ngày sau.
- Ngày hôm sau, người dùng sửa và xác nhận.

---

## 11. Weekly Review

### Mục tiêu người dùng

Đánh giá kết quả tuần và lên kế hoạch tuần sau.

### Dữ liệu đầu vào

- Toàn bộ Daily Report trong tuần
- Toàn bộ Learning Session trong tuần
- Kết quả review các Mission
- Trạng thái Skill hiện tại
- Mức độ bám Roadmap

### Hành động người dùng

1. Tổng hợp Mission.
2. Tổng hợp Learning Session.
3. Tổng hợp output.
4. Tổng hợp evidence.
5. Phát hiện điểm yếu lặp lại.
6. Xem Skill thay đổi.
7. Đánh giá mức độ bám Roadmap.
8. Xác định việc cần làm lại.
9. Chọn Primary Focus tuần sau.
10. Tạo kết quả mong muốn tuần sau.

### Hành động hệ thống

- Hiển thị dữ liệu tổng hợp từ các ngày.
- Gợi ý điểm yếu lặp lại.
- Gợi ý Primary Focus tuần sau dựa trên Roadmap và điểm yếu.
- Tạo bản nháp kế hoạch tuần sau.

### Kết quả đầu ra

- Weekly Review hoàn tất.
- Kế hoạch tuần sau được thiết lập.

### Trường hợp không đủ dữ liệu

- Không giả tạo kết luận.
- Hiển thị dữ liệu còn thiếu.
- Cho phép hoàn thành review với trạng thái Reviewed.
- Đưa hành động bổ sung dữ liệu vào tuần sau.

### Data Completeness

Weekly Review có thuộc tính nghiệp vụ Data Completeness:

- **Complete**: Tuần có đủ dữ liệu cần thiết cho review.
- **Incomplete**: Tuần thiếu dữ liệu.

Nếu Data Completeness là Incomplete, phải ghi rõ:

- Dữ liệu còn thiếu.
- Hành động bổ sung dữ liệu.

### Bước tiếp theo

- Roadmap được điều chỉnh dựa trên kết quả review.
- Tuần sau bắt đầu với kế hoạch đã chuẩn bị.

---

## 12. Trạng Thái Sản Phẩm

### Mission

| Trạng thái | Ý nghĩa | Điều kiện vào | Hành động cho phép | Trạng thái tiếp theo hợp lệ |
|---|---|---|---|---|
| Draft | Bản nháp nhiệm vụ | Hệ thống tạo hoặc người dùng tạo | Sửa nội dung, output, evidence, tiêu chí | Ready |
| Ready | Nhiệm vụ đã sẵn sàng | Bản nháp được xác nhận | Bắt đầu Learning Session | In Progress |
| In Progress | Đang thực hiện | Learning Session bắt đầu | Ghi session, nộp report | Submitted, Blocked |
| Submitted | Đã nộp báo cáo | Daily Report nộp | Chờ review | Completed, Needs Rework, Blocked |
| Completed | Đã hoàn thành | Review kết quả Đạt | Xem lại lịch sử | — |
| Needs Rework | Cần làm lại | Review kết quả Cần làm lại | Tạo nhiệm vụ làm lại | In Progress |
| Blocked | Bị chặn | Có blocker | Ghi blocker, gợi ý thay thế | In Progress |

Luồng hợp lệ của Mission Blocked:

Blocked → In Progress → Submitted → Completed sau Review Passed.

Mission chỉ được Completed thông qua review kết quả Đạt. Không có transition trực tiếp Blocked → Completed.

### Learning Session

| Trạng thái | Ý nghĩa | Điều kiện vào | Hành động cho phép | Trạng thái tiếp theo hợp lệ |
|---|---|---|---|---|
| Planned | Đã lên kế hoạch | Nằm trong kế hoạch tuần | Sắp xếp thời gian | Active |
| Active | Đang diễn ra | Người dùng bắt đầu phiên | Ghi nội dung, khó khăn | Completed, Abandoned |
| Completed | Đã hoàn thành | Người dùng kết thúc phiên | Tổng hợp vào báo cáo | — |
| Abandoned | Bị bỏ dở | Người dùng không tiếp tục | Xem lý do bỏ dở | — |

### Daily Report

| Trạng thái | Ý nghĩa | Điều kiện vào | Hành động cho phép | Trạng thái tiếp theo hợp lệ |
|---|---|---|---|---|
| Draft | Bản nháp báo cáo | Người dùng tạo | Sửa nội dung | Submitted |
| Submitted | Đã nộp | Người dùng nộp | Chờ review, giữ lịch sử khi sửa | Reviewed |
| Reviewed | Đã được review | Review hoàn tất | Xem kết quả review | — |

### Review

| Trạng thái | Ý nghĩa | Điều kiện vào | Hành động cho phép | Trạng thái tiếp theo hợp lệ |
|---|---|---|---|---|
| Pending | Đang chờ review | Báo cáo Submitted | Đánh giá output, evidence, tiêu chí | Passed, Rework, Blocked |
| Passed | Đạt | Đủ output, đủ evidence, đạt mọi tiêu chí | Cập nhật Skill, sinh hành động tiếp theo | — |
| Rework | Cần làm lại | Output hoặc evidence chưa đạt | Ghi lý do, điểm yếu, tạo việc làm lại | — |
| Blocked | Bị chặn | Có blocker | Ghi blocker, hành động gỡ | — |

### Week

| Trạng thái | Ý nghĩa | Điều kiện vào | Hành động cho phép | Trạng thái tiếp theo hợp lệ |
|---|---|---|---|---|
| Planned | Đã lên kế hoạch | Chuẩn bị tuần hoàn tất | Xem kế hoạch | Active |
| Active | Đang diễn ra | Tuần bắt đầu | Tạo và thực hiện nhiệm vụ | Review Due |
| Review Due | Đến hạn review | Ngày review đến | Tạo Weekly Review | Reviewed |
| Reviewed | Đã review | Weekly Review hoàn tất | Xem kết quả, điều chỉnh Roadmap | — |

Weekly Review có thuộc tính nghiệp vụ Data Completeness: Complete hoặc Incomplete. Không tạo thêm trạng thái Week mới cho trường hợp thiếu dữ liệu.

Không thêm trạng thái nếu không có use case rõ ràng.

---

## 13. Các Trường Hợp Ngoại Lệ

### Người dùng bỏ một ngày học

- Không làm nhiệm vụ trong ngày.
- Ngày đó được đánh dấu là bỏ trống.
- Các nhiệm vụ chưa thực hiện được chuyển sang bản nháp ngày hôm sau hoặc được điều chỉnh trong Weekly Review.
- Không tự động coi là thất bại, nhưng dữ liệu được ghi nhận để nhìn thấy tần suất bỏ ngày.

### Người dùng nộp báo cáo muộn

- Báo cáo vẫn có thể nộp sau giờ học.
- Hệ thống ghi nhận thời gian nộp thực tế.
- Review vẫn diễn ra bình thường.
- Nộp muộn được ghi nhận để đánh giá mức độ bám lộ trình.

### Mission không có output

- Không thể hoàn thành Mission.
- Người dùng nộp báo cáo với trạng thái thiếu output.
- Hệ thống cảnh báo rõ thiếu output.
- Review sẽ trả về kết quả Cần làm lại hoặc Blocked nếu không có lý do rõ ràng.

### Evidence không thể truy cập

- Người dùng ghi evidence nhưng đường dẫn hoặc tham chiếu không truy cập được.
- Hệ thống đánh dấu evidence là không hợp lệ.
- Người dùng cần sửa hoặc thay bằng evidence hợp lệ.
- Cho đến khi evidence hợp lệ, Mission không thể Đạt.

### Learning Session chưa kết thúc

- Nếu Learning Session còn Active khi người dùng muốn nộp báo cáo, hệ thống nhắc người dùng kết thúc phiên trước.
- Người dùng có thể đánh dấu Abandoned nếu muốn bỏ phiên.
- Báo cáo vẫn có thể hoàn thành dựa trên các phiên đã kết thúc.

### Nhiều Mission cùng được đánh dấu Primary

- Hệ thống chỉ cho phép một Mission là Primary trong một ngày.
- Nếu người dùng cố đánh dấu Mission thứ hai là Primary, hệ thống từ chối và nhắc chọn Mission còn lại làm Supporting.
- Supporting tối đa hai Mission mỗi ngày.

### Review chưa hoàn thành

- Nếu một Mission còn ở trạng thái Submitted chưa được review khi kết thúc ngày.
- Hệ thống chuyển việc review sang ngày tiếp theo.
- Daily Close không tạo nhiệm vụ ngày sau dựa trên Mission chưa review, trừ khi có nhiệm vụ thay thế rõ ràng.
- Weekly Review vẫn sử dụng dữ liệu có sẵn và ghi rõ phần review còn thiếu.

### Mission bị làm lại nhiều lần

- Mỗi lần làm lại được ghi lịch sử.
- Sau một số lần lặp lại, Weekly Review sẽ xác định liệu Mission có phù hợp Roadmap không.
- Nếu lặp lại quá nhiều lần mà không tiến triển, có thể đề xuất chia nhỏ Mission hoặc điều chỉnh tiêu chí.
- Quyết định cuối cùng nằm ở Weekly Review.

### Không có dữ liệu cho Weekly Review

- Nếu tuần thiếu dữ liệu, Weekly Review vẫn diễn ra.
- Hệ thống hiển thị rõ dữ liệu còn thiếu.
- Weekly Review không giả tạo kết luận.
- Bổ sung dữ liệu được đưa vào hành động tuần sau.

### Backup thất bại

- Hệ thống báo lỗi backup rõ ràng.
- Người dùng được hướng dẫn thử lại.
- Không tự động ghi đè backup cũ khi lần backup mới thất bại.
- Nếu backup thất bại nhiều lần, hệ thống gợi ý kiểm tra nơi lưu.

### Người dùng muốn sửa dữ liệu cũ

- Cho phép sửa dữ liệu đã ghi.
- Lịch sử chỉnh sửa được giữ lại.
- Nếu sửa dữ liệu đã review, hệ thống đánh dấu cần review lại.
- Không xóa dữ liệu gốc, chỉ ghi thêm bản sửa đổi.

Không thiết kế xử lý kỹ thuật cho các trường hợp này.

---

## 14. Luồng Khôi Phục

### Bỏ dở Onboarding

- Dữ liệu khởi tạo đã nhập được lưu dưới dạng bản nháp.
- Khi người dùng quay lại, hệ thống hiển thị bước còn thiếu.
- Người dùng tiếp tục từ điểm dở dang.

### Bỏ dở Daily Report

- Báo cáo ở trạng thái Draft được lưu.
- Khi người dùng quay lại, hệ thống hiển thị báo cáo Draft.
- Người dùng tiếp tục chỉnh sửa và nộp.

### Ứng dụng đóng giữa Learning Session

- Learning Session Active được lưu.
- Khi người dùng mở lại, hệ thống hiển thị phiên Active.
- Người dùng có thể tiếp tục phiên hoặc kết thúc.
- Nếu không tiếp tục, người dùng có thể đánh dấu Abandoned.

### Review chưa hoàn thành

- Các Mission còn ở trạng thái Submitted.
- Khi người dùng mở lại, hệ thống hiển thị các Mission chờ review.
- Review được thực hiện trước khi tạo nhiệm vụ ngày sau.

### Một tuần chưa được review

- Weekly Review tuần trước chưa hoàn thành.
- Khi người dùng mở lại, hệ thống hiển thị nhắc review tuần trước.
- Người dùng có thể hoàn thành review muộn hoặc được hướng dẫn xử lý.
- Kế hoạch tuần hiện tại vẫn có thể diễn ra.

### Dữ liệu vừa được restore từ backup

- Sau khi restore, hệ thống kiểm tra tính đầy đủ dữ liệu.
- Hiển thị trạng thái phục hồi.
- Người dùng được đưa đến trạng thái gần nhất với dữ liệu đã restore.

Mục tiêu là người dùng luôn biết bước tiếp theo.

---

## 15. Product Flow Scenarios

### Scenario A — Ngày học bình thường

#### Starting condition

- Tuần đã được chuẩn bị.
- Daily Mission của ngày hôm nay đã được chuẩn bị.
- Primary Mission về chuyên môn chính và một Supporting Mission về ngoại ngữ.

#### User actions

1. Mở Titan OS xem Daily Mission.
2. Xác nhận Primary Mission và Supporting Mission (sửa output/evidence nếu cần).
3. Bắt đầu Learning Session cho Primary Mission.
4. Thực hiện nhiệm vụ, tạo ra output.
5. Kết thúc phiên, ghi kết quả.
6. Mở Daily Report, ghi output, thêm evidence, tự đánh giá.
7. Nộp Daily Report.

#### System responses

1. Hiển thị Daily Mission, kết quả ngày trước.
2. Xác nhận Daily Mission, chuyển trạng thái Ready.
3. Ghi nhận phiên Active.
4. — (không có hành động).
5. Ghi nhận phiên Completed.
6. Lưu output và evidence vào Daily Report.
7. Chuyển Daily Report sang Submitted, kích hoạt Review.

#### End condition

- Daily Report ở trạng thái Submitted.
- Primary Mission ở trạng thái Submitted, chờ review.
- Supporting Mission ở trạng thái Submitted và chờ review.

#### Next action

- Review Workflow đánh giá Primary Mission và Supporting Mission.
- Vào cuối ngày, hệ thống tạo bản nháp nhiệm vụ ngày sau sau khi có kết quả review.

---

### Scenario B — Output chưa đạt và phải làm lại

#### Starting condition

- Daily Report đã nộp.
- Primary Mission ở trạng thái Submitted.
- Review Workflow chưa hoàn thành.

#### User actions

1. Nhận kết quả review.
2. Xem lý do chưa đạt, điểm yếu và tiêu chí cần sửa.
3. Xác nhận hành động tiếp theo.

#### System responses

1. Hiển thị kết quả review là Cần làm lại.
2. Ghi lý do, điểm yếu, tiêu chí cần sửa.
3. Đưa việc làm lại vào bản nháp ngày tiếp theo.
4. Đánh dấu Mission cũ là Needs Rework.

#### End condition

- Mission ở trạng thái Needs Rework.
- Bản nháp ngày sau có việc làm lại.

#### Next action

- Ngày hôm sau, người dùng mở bản nháp, sửa và thực hiện lại.

---

### Scenario C — Mission bị chặn

#### Starting condition

- Daily Report đã nộp.
- Review Workflow đang tiến hành.
- Có blocker ngăn không thể hoàn thành nhiệm vụ.

#### User actions

1. Nhận kết quả review là Bị chặn.
2. Xem blocker được ghi lại.
3. Xem hành động gỡ blocker.
4. Nhận đề xuất nhiệm vụ thay thế (nếu có).

#### System responses

1. Đánh dấu Mission là Blocked.
2. Ghi blocker.
3. Ghi hành động gỡ blocker.
4. Đề xuất nhiệm vụ thay thế nếu có.
5. Không tự động đánh dấu Đạt hoặc Cần làm lại.

#### End condition

- Mission ở trạng thái Blocked.
- Nếu có nhiệm vụ thay thế, người dùng chuyển sang nhiệm vụ đó.
- Nếu không, Mission giữ trạng thái Blocked cho đến khi gỡ blocker.

#### Next action

- Người dùng thực hiện hành động gỡ blocker.
- Nếu có nhiệm vụ thay thế, thực hiện nhiệm vụ thay thế.

---

### Scenario D — Người dùng bỏ một ngày

#### Starting condition

- Ngày hôm nay có Daily Mission đã lên kế hoạch.
- Người dùng không mở Titan OS hoặc không thực hiện nhiệm vụ.

#### User actions

1. Người dùng không thực hiện nhiệm vụ trong ngày.

#### System responses

1. Ghi nhận ngày học bị bỏ trống.
2. Giữ các nhiệm vụ chưa thực hiện.
3. Chuẩn bị cho phép chuyển nhiệm vụ sang ngày tiếp theo hoặc điều chỉnh trong Weekly Review.
4. Không tự động coi là thất bại.

#### End condition

- Ngày được đánh dấu bỏ trống.
- Nhiệm vụ chưa thực hiện được giữ lại.

#### Next action

- Người dùng quyết định chuyển nhiệm vụ sang ngày sau hoặc điều chỉnh ở Weekly Review.

---

### Scenario E — Weekly Review thiếu dữ liệu

#### Starting condition

- Tuần gần kết thúc.
- Một hoặc nhiều ngày trong tuần không có Daily Report.
- Weekly Review đến hạn.

#### User actions

1. Mở Weekly Review.
2. Xem dữ liệu tổng hợp.
3. Nhận biết dữ liệu còn thiếu từ các ngày bỏ trống.
4. Hoàn thành review với trạng thái thiếu dữ liệu.
5. Xác nhận hành động bổ sung dữ liệu cho tuần sau.

#### System responses

1. Hiển thị dữ liệu có sẵn.
2. Đánh dấu rõ các phần thiếu dữ liệu.
3. Không giả tạo kết luận cho phần thiếu.
4. Cho phép hoàn thành Weekly Review với trạng thái thiếu dữ liệu.
5. Đưa hành động bổ sung dữ liệu vào kế hoạch tuần sau.

#### End condition

- Weekly Review hoàn tất với trạng thái Reviewed.
- Kế hoạch tuần sau được tạo.
- Có hành động bổ sung dữ liệu cho tuần sau.

#### Next action

- Người dùng thực hiện hành động bổ sung dữ liệu trong tuần sau.

---

## 16. Điểm Chuyển Sang Information Architecture

Task 05 — Information Architecture và Navigation Model cần nhận các thông tin sau từ tài liệu này:

### Các khu vực sản phẩm cần có

- Career Context: Hồ sơ nghề nghiệp, mục tiêu, điểm mạnh, điểm yếu, lịch học.
- Roadmap: Mục tiêu hiện tại, trọng tâm, kết quả cần đạt, thứ tự ưu tiên, điều chỉnh roadmap.
- Daily Plan: Primary Mission và Supporting Missions của ngày.
- Learning Session: Phiên học, thời gian, nội dung, kết quả.
- Daily Report: Báo cáo hằng ngày với output và evidence.
- Review: Kết quả review của từng Mission.
- Skill Tracking: Trạng thái kỹ năng và evidence liên quan.
- Weekly Review: Đánh giá tuần và kế hoạch tuần sau.
- Backup và Export: Sao lưu và phục hồi dữ liệu.

### Dữ liệu người dùng cần nhìn thấy ở mỗi giai đoạn

- **Khởi tạo**: Career Context, mục tiêu, điểm mạnh, điểm yếu, lịch học, trạng thái kỹ năng ban đầu.
- **Chuẩn bị tuần**: Mục tiêu hiện tại, kết quả tuần, Primary Focus, output tuần, evidence tuần, khung nhiệm vụ.
- **Ngày học**: Trọng tâm hiện tại, kết quả ngày trước, nhiệm vụ cần làm lại, Daily Mission, Learning Session.
- **Cuối ngày**: Trạng thái Mission, output, evidence, điểm yếu, blocker, hành động tiếp theo, bản nháp ngày sau.
- **Cuối tuần**: Tổng hợp Mission, Learning Session, output, evidence, điểm yếu lặp lại, Skill thay đổi, mức độ bám Roadmap.

### Hành động chính

- Nhập và quản lý Career Context.
- Xem và điều chỉnh Roadmap.
- Tạo, sửa, xác nhận Daily Mission.
- Bắt đầu, ghi, kết thúc Learning Session.
- Tạo, lưu, nộp Daily Report.
- Ghi output và evidence.
- Thực hiện Review Workflow.
- Xem và cập nhật Skill.
- Tạo và hoàn thành Weekly Review.
- Sao lưu và phục hồi dữ liệu.

### Trạng thái chính

- Mission: Draft, Ready, In Progress, Submitted, Completed, Needs Rework, Blocked.
- Learning Session: Planned, Active, Completed, Abandoned.
- Daily Report: Draft, Submitted, Reviewed.
- Review: Pending, Passed, Rework, Blocked.
- Week: Planned, Active, Review Due, Reviewed.

### Các liên kết giữa các khái niệm

- **Career Context → Roadmap**: Career Context cung cấp mục tiêu và lịch học cho Roadmap.
- **Roadmap → Mission**: Roadmap cung cấp trọng tâm và kết quả cho Daily Mission.
- **Mission → Learning Session**: Một Mission có thể có nhiều Learning Session.
- **Learning Session → Daily Report**: Learning Session được tổng hợp vào Daily Report.
- **Daily Report → Output/Evidence**: Daily Report chứa output và evidence.
- **Output/Evidence → Review**: Review kiểm tra output và evidence.
- **Review → Skill**: Kết quả review cập nhật Skill.
- **Skill → Roadmap**: Trạng thái Skill ảnh hưởng đến điều chỉnh Roadmap.
- **Review → Next Mission**: Kết quả review sinh hành động tiếp theo và nhiệm vụ ngày sau.
- **Daily Report → Weekly Review**: Weekly Review tổng hợp từ Daily Report.
- **Weekly Review → Roadmap**: Weekly Review điều chỉnh Roadmap.
- **Weekly Review → Week**: Weekly Review tạo kế hoạch tuần sau.

Không tự thiết kế sitemap trong Task này.
