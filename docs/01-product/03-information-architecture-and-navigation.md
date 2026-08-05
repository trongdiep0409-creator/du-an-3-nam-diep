# Titan OS — Information Architecture and Navigation Model

> Tài liệu này tổ chức thông tin và xác định mô hình điều hướng cho MVP.
> Nguồn sự thật: toàn bộ tài liệu trong docs/00-context và docs/01-product.
> Các quyết định CTO đã phê duyệt là bắt buộc trong tài liệu này.

---

## 1. Mục Đích Tài Liệu

Tài liệu này mô tả:

- **Cách thông tin được tổ chức**: Xác định cấu trúc thông tin của sản phẩm.
- **Khu vực nào sở hữu thông tin nào**: Xác định nguồn sự thật cho từng loại thông tin.
- **Người dùng đi từ hành động này sang hành động khác như thế nào**: Mô tả luồng điều hướng.
- **Cách navigation hỗ trợ vòng lặp ngày và tuần**: Đảm bảo navigation phục vụ vòng lặp cốt lõi.
- **Nguồn đầu vào cho Screen Inventory và UX Requirements**: Cung cấp thông tin cho Task 06.

Không thiết kế giao diện chi tiết trong Task này.

---

## 2. Nguyên Tắc Information Architecture

- **Action First**: Thông tin được tổ chức để người dùng hành động, không chỉ xem.
- **One Main Focus At A Time**: Mỗi thời điểm chỉ có một trọng tâm chính.
- **Không có Dashboard chỉ để xem số**: Số liệu phải phục vụ quyết định.
- **Người dùng luôn thấy hành động tiếp theo**: Mọi trạng thái đều có bước kế tiếp rõ ràng.
- **Không nhập lại cùng dữ liệu**: Mỗi thông tin chỉ nhập một lần.
- **Thông tin xuất hiện ở nơi người dùng cần hành động**: Không tách rời thông tin khỏi hành động.
- **Một nguồn sự thật cho mỗi loại thông tin**: Mỗi object chỉ có một khu vực sở hữu chính.
- **History không được ghi đè**: Lịch sử dữ liệu được giữ nguyên.
- **Không đưa Future Scope vào navigation MVP**: Không tạo placeholder cho tính năng tương lai.
- **Navigation phải giữ đơn giản trong ít nhất phiên bản MVP**: Tối đa năm khu vực cấp cao.

---

## 3. Thuật Ngữ Chuẩn

| Canonical Concept | Nhãn tiếng Việt đề xuất | Ý nghĩa | Không được nhầm với |
|---|---|---|---|
| Today | Hôm nay | Khu vực điều hướng cho vòng lặp hằng ngày | Dashboard |
| Plan | Kế hoạch | Khu vực Roadmap và kế hoạch tuần | Calendar |
| Roadmap | Lộ trình | Mục tiêu, trọng tâm và thứ tự ưu tiên | Week Plan |
| Week Plan | Kế hoạch tuần | Kết quả tuần, output tuần, khung nhiệm vụ | Roadmap |
| Mission | Nhiệm vụ | Một nhiệm vụ học tập cụ thể | Task chung chung |
| Primary Mission | Nhiệm vụ chính | Nhiệm vụ trọng tâm chuyên môn chính | Supporting Mission |
| Supporting Mission | Nhiệm vụ hỗ trợ | Nhiệm vụ phụ trợ (ngoại ngữ, AI Lab) | Primary Mission |
| Learning Session | Phiên học | Phiên thực hiện nhiệm vụ | Timer |
| Daily Report | Báo cáo ngày | Báo cáo hằng ngày với output và evidence | Weekly Review |
| Output | Sản phẩm tạo ra | Sản phẩm cụ thể người dùng tạo ra | Evidence |
| Evidence | Bằng chứng | Bằng chứng năng lực | Output |
| Review | Đánh giá | Đánh giá output và evidence | AI Chat |
| Weekly Review | Đánh giá tuần | Đánh giá tổng hợp tuần | Daily Report |
| Skill | Kỹ năng | Kỹ năng đang theo dõi | Career Score |
| Career Context | Hồ sơ nghề nghiệp | Hồ sơ, mục tiêu, điểm mạnh, điểm yếu, lịch học | Profile mạng xã hội |
| Settings & Data | Cài đặt và dữ liệu | Khu vực Career Context và quản lý dữ liệu | Cài đặt hệ thống |

Không đổi nghĩa của các khái niệm đã phê duyệt.

---

## 4. Navigation Cấp Cao

Titan OS MVP có đúng năm khu vực điều hướng cấp cao:

### Today

- **Mục tiêu**: Hỗ trợ vòng lặp hằng ngày.
- **Người dùng vào đây khi nào**: Điểm vào mặc định, mỗi khi mở Titan OS.
- **Thông tin chính**: Daily Mission, Learning Session, Daily Report, Pending Review ảnh hưởng ngày hôm nay.
- **Hành động chính**: Xác nhận Mission, bắt đầu Learning Session, nộp Daily Report.
- **Kết quả đầu ra**: Daily Report Submitted, Mission được review.
- **Khu vực liên kết tiếp theo**: Reviews (sau khi nộp báo cáo), Plan (khi cần xem lộ trình).
- **Nội dung không thuộc khu vực này**: Roadmap chi tiết, Weekly Review, Skill history.

### Plan

- **Mục tiêu**: Quản lý Roadmap và kế hoạch tuần.
- **Người dùng vào đây khi nào**: Đầu tuần để chuẩn bị tuần, khi cần điều chỉnh lộ trình.
- **Thông tin chính**: Roadmap, Week Plan, Primary Focus, kết quả tuần.
- **Hành động chính**: Xem mục tiêu, chọn Primary Focus, tạo khung nhiệm vụ tuần.
- **Kết quả đầu ra**: Week Plan sẵn sàng, Roadmap được điều chỉnh.
- **Khu vực liên kết tiếp theo**: Today (bắt đầu ngày học).
- **Nội dung không thuộc khu vực này**: Daily Mission chi tiết, Learning Session.

### Reviews

- **Mục tiêu**: Quản lý toàn bộ hoạt động review.
- **Người dùng vào đây khi nào**: Khi có Pending Review, khi cần xem kết quả review, khi đến hạn Weekly Review.
- **Thông tin chính**: Pending Reviews, Review đã hoàn thành, Mission cần làm lại, Mission bị chặn, Weekly Review.
- **Hành động chính**: Thực hiện review, xem kết quả, xử lý Mission cần làm lại, hoàn thành Weekly Review.
- **Kết quả đầu ra**: Review hoàn tất, Weekly Review Reviewed.
- **Khu vực liên kết tiếp theo**: Today (nhiệm vụ tiếp theo), Progress (Skill cập nhật), Plan (Roadmap điều chỉnh).
- **Nội dung không thuộc khu vực này**: Daily Mission, Learning Session.

### Progress

- **Mục tiêu**: Theo dõi Skill, Evidence và lịch sử tiến bộ cần thiết cho MVP.
- **Người dùng vào đây khi nào**: Khi muốn xem kỹ năng, evidence, điểm yếu lặp lại.
- **Thông tin chính**: Skill Tracking, Evidence, Progress History.
- **Hành động chính**: Xem trạng thái kỹ năng, xem evidence, xem điểm yếu lặp lại.
- **Kết quả đầu ra**: Người dùng biết kỹ năng đang ở đâu và cần làm gì.
- **Khu vực liên kết tiếp theo**: Plan (điều chỉnh lộ trình), Reviews (xem review liên quan).
- **Nội dung không thuộc khu vực này**: Career Score, Ranking, Gamification.

### Settings & Data

- **Mục tiêu**: Quản lý Career Context và dữ liệu.
- **Người dùng vào đây khi nào**: Khi cần sửa hồ sơ, lịch học, backup, restore, export.
- **Thông tin chính**: Career Context, Data Management.
- **Hành động chính**: Sửa hồ sơ, sửa lịch học, backup, restore, export.
- **Kết quả đầu ra**: Career Context cập nhật, dữ liệu được sao lưu/phục hồi.
- **Khu vực liên kết tiếp theo**: Plan (sau khi sửa Career Context), Today.
- **Nội dung không thuộc khu vực này**: Daily Mission, Review, Skill.

---

## 5. Today — Information Architecture

Today phải ưu tiên theo thứ tự:

1. Hành động cần làm ngay
2. Primary Mission
3. Supporting Missions
4. Active Learning Session
5. Mission cần làm lại
6. Pending Review ảnh hưởng đến ngày hôm nay
7. Daily Report
8. Daily Close
9. Bản nháp ngày sau

Không mô tả layout trong Task này.

### Thông tin bắt buộc luôn hiển thị

- Trọng tâm hiện tại.
- Primary Mission của ngày.
- Trạng thái Daily Report.

### Thông tin chỉ xuất hiện theo trạng thái

- Active Learning Session: chỉ khi có phiên đang diễn ra.
- Mission cần làm lại: chỉ khi có Mission Needs Rework.
- Pending Review ảnh hưởng ngày hôm nay: chỉ khi có review chưa hoàn thành.
- Bản nháp ngày sau: chỉ khi Daily Close đã tạo.

### Hành động chính duy nhất tại từng thời điểm

- Nếu có Active Learning Session: tiếp tục phiên.
- Nếu có Draft Daily Report: hoàn thành báo cáo.
- Nếu có Pending Review chặn Mission: thực hiện review.
- Nếu có Mission Needs Rework: xử lý làm lại.
- Nếu có Mission Blocked: gỡ blocker.
- Nếu chưa xác nhận Daily Mission: xác nhận Mission.
- Nếu chưa bắt đầu Primary Mission: bắt đầu Primary Mission.

### Cách tiếp tục khi có Active Session

- Hiển thị phiên Active.
- Người dùng tiếp tục phiên hoặc kết thúc.
- Nếu không tiếp tục, người dùng có thể đánh dấu Abandoned.

### Cách tiếp tục khi có Draft Report

- Hiển thị báo cáo Draft.
- Người dùng tiếp tục chỉnh sửa và nộp.

### Cách tiếp tục khi có Pending Review

- Hiển thị Mission chờ review.
- Người dùng chuyển đến Reviews để thực hiện review.

### Cách xử lý ngày bị bỏ

- Ngày được đánh dấu bỏ trống.
- Nhiệm vụ chưa thực hiện được giữ lại.
- Người dùng quyết định chuyển nhiệm vụ sang ngày sau hoặc điều chỉnh ở Weekly Review.

---

## 6. Plan — Information Architecture

Plan gồm hai phần chính:

### Roadmap

- Mục tiêu 1, 2 và 3 năm.
- Trọng tâm hiện tại.
- Kết quả đang hướng tới.
- Thứ tự ưu tiên.
- Lịch sử điều chỉnh ở cấp sản phẩm.

### Week Plan

- Primary Focus tuần.
- Kết quả tuần.
- Output tuần.
- Evidence tuần.
- Khung nhiệm vụ.
- Việc cần làm lại.

### Thông tin nào được sửa

- Week Plan: được sửa khi chuẩn bị tuần.
- Roadmap: được sửa khi điều chỉnh lộ trình (sau Weekly Review).

### Thông tin nào chỉ xem

- Mục tiêu 1, 2 và 3 năm: chỉ xem, không sửa trực tiếp trong Plan.
- Lịch sử điều chỉnh Roadmap: chỉ xem.

### Khi nào được điều chỉnh Roadmap

- Sau Weekly Review.
- Khi có dữ liệu tiến bộ cho thấy cần điều chỉnh.

### Khi nào Week Plan được tạo

- Đầu tuần, trước khi bắt đầu ngày học đầu tiên.
- Sau Weekly Review tuần trước.

### Mối liên hệ giữa Roadmap, Week và Today

- Roadmap cung cấp trọng tâm cho Week Plan.
- Week Plan cung cấp khung nhiệm vụ cho Today.
- Today tạo dữ liệu cho Weekly Review.
- Weekly Review điều chỉnh Roadmap.

Không thiết kế roadmap nhiều tầng trong Task này.

---

## 7. Reviews — Information Architecture

Reviews gồm:

- Pending Reviews.
- Review đã hoàn thành.
- Mission cần làm lại.
- Mission bị chặn.
- Weekly Review đến hạn.
- Lịch sử Weekly Review.

### Thứ tự ưu tiên review

1. Pending Review đang chặn Mission.
2. Pending Review của Mission trong ngày.
3. Weekly Review đến hạn.
4. Các review khác.

### Dữ liệu cần có trước khi review

- Output được đánh giá.
- Evidence được kiểm tra.
- Tiêu chí hoàn thành.
- Daily Report đã nộp.

### Kết quả review

- Đạt.
- Cần làm lại.
- Bị chặn.

### Hành động sau review

- Đạt: cập nhật Skill, sinh hành động tiếp theo.
- Cần làm lại: ghi lý do, điểm yếu, tạo việc làm lại.
- Bị chặn: ghi blocker, hành động gỡ blocker.

### Cách review ảnh hưởng Today, Skill và Plan

- **Today**: Kết quả review sinh nhiệm vụ ngày sau.
- **Skill**: Kết quả Đạt cập nhật Skill.
- **Plan**: Weekly Review điều chỉnh Roadmap.

Không biến Reviews thành AI Chat trong Task này.

---

## 8. Progress — Information Architecture

Progress MVP gồm:

### Skill Tracking cơ bản

Trạng thái:

- Chưa bắt đầu.
- Đang học.
- Đã chứng minh.

### Evidence

- Evidence đã ghi.
- Evidence đã xác nhận.
- Evidence không hợp lệ.
- Skill liên quan.
- Mission và Review liên quan.

### Progress History

Chỉ chứa lịch sử cần thiết để:

- Biết kỹ năng đã thay đổi thế nào.
- Biết evidence nào chứng minh kỹ năng.
- Biết điểm yếu nào đang lặp lại.

Không thêm:

- Career Score.
- Ranking.
- Level phức tạp.
- Badge.
- Gamification.
- Analytics nâng cao.

---

## 9. Settings & Data — Information Architecture

Bao gồm:

### Career Context

- Hồ sơ nghề nghiệp.
- Điểm mạnh.
- Điểm yếu.
- Mục tiêu nghề nghiệp.
- Lịch học.
- Trọng tâm hiện tại.

### Data Management

- Backup.
- Restore.
- Export.
- Trạng thái backup gần nhất.
- Cảnh báo backup thất bại.

### Nội dung nào thay đổi thường xuyên

- Trọng tâm hiện tại.
- Điểm yếu (cập nhật theo review).

### Nội dung nào hiếm khi thay đổi

- Hồ sơ nghề nghiệp.
- Mục tiêu nghề nghiệp.
- Lịch học.

### Việc sửa Career Context ảnh hưởng Roadmap và Today thế nào

- Sửa trọng tâm hiện tại: ảnh hưởng Roadmap và Daily Mission.
- Sửa lịch học: ảnh hưởng khung nhiệm vụ tuần.
- Sửa điểm yếu: ảnh hưởng đề xuất nhiệm vụ.

### Việc restore dữ liệu phải đưa người dùng trở lại trạng thái nào

- Đưa người dùng đến trạng thái gần nhất với dữ liệu đã restore.
- Hiển thị trạng thái phục hồi.
- Người dùng biết bước tiếp theo.

Không mô tả công nghệ backup trong Task này.

---

## 10. Content Ownership Matrix

| Information Object | Khu vực sở hữu | Khu vực được phép hiển thị tham chiếu | Hành động tạo | Hành động sửa | History bắt buộc |
|---|---|---|---|---|---|
| Career Context | Settings & Data | Plan, Today | Người dùng tạo | Người dùng sửa | Có |
| Career Goal | Settings & Data | Plan | Người dùng tạo | Người dùng sửa | Có |
| Current Focus | Settings & Data | Plan, Today | Người dùng tạo | Người dùng sửa | Có |
| Roadmap | Plan | Today, Reviews | Hệ thống tạo từ Career Context | Người dùng điều chỉnh sau Weekly Review | Có |
| Week Plan | Plan | Today | Người dùng tạo | Người dùng sửa | Có |
| Mission | Today | Plan, Reviews, Progress | Hệ thống tạo bản nháp, người dùng xác nhận | Người dùng sửa trước khi xác nhận | Có |
| Learning Session | Today | Reviews | Người dùng tạo | Người dùng sửa | Có |
| Daily Report | Today | Reviews | Người dùng tạo | Người dùng sửa (giữ lịch sử) | Có |
| Output | Today | Reviews, Progress | Người dùng tạo | Người dùng sửa | Có |
| Evidence | Today | Reviews, Progress | Người dùng tạo | Người dùng sửa | Có |
| Review | Reviews | Today, Progress | Người dùng thực hiện | Người dùng sửa (giữ lịch sử) | Có |
| Skill | Progress | Reviews, Plan | Hệ thống tạo từ Career Context | Hệ thống cập nhật sau review | Có |
| Weekly Review | Reviews | Plan, Progress | Người dùng tạo | Người dùng sửa | Có |
| Backup Record | Settings & Data | — | Hệ thống tạo | — | Có |

Mỗi object chỉ có một khu vực sở hữu chính.

---

## 11. Flow-to-Area Mapping

| Product Flow Step | Khu vực bắt đầu | Khu vực xử lý | Khu vực kết thúc | Next Action |
|---|---|---|---|---|
| Onboarding | Settings & Data | Settings & Data | Today | Xác nhận Daily Mission đầu tiên |
| Chuẩn bị tuần | Plan | Plan | Today | Bắt đầu ngày học |
| Bắt đầu ngày | Today | Today | Today | Xác nhận Daily Mission |
| Thực hiện Mission | Today | Today | Today | Bắt đầu Learning Session |
| Active Learning Session | Today | Today | Today | Kết thúc phiên |
| Nộp Daily Report | Today | Today | Reviews | Thực hiện review |
| Review Passed | Reviews | Reviews | Progress, Today | Cập nhật Skill, tạo nhiệm vụ ngày sau |
| Review Rework | Reviews | Reviews | Today | Tạo việc làm lại |
| Review Blocked | Reviews | Reviews | Today | Gỡ blocker |
| Daily Close | Today | Today | Today | Xem bản nháp ngày sau |
| Weekly Review | Reviews | Reviews | Plan | Điều chỉnh Roadmap |
| Roadmap Adjustment | Plan | Plan | Today | Chuẩn bị tuần mới |
| Backup | Settings & Data | Settings & Data | Settings & Data | Xem trạng thái backup |
| Restore | Settings & Data | Settings & Data | Today | Tiếp tục từ trạng thái đã restore |

---

## 12. Contextual Navigation

Các liên kết theo ngữ cảnh:

- **Mission → Sessions**: Từ Mission xem các Learning Session liên quan.
- **Mission → Daily Report**: Từ Mission xem Daily Report.
- **Mission → Output**: Từ Mission xem output.
- **Mission → Evidence**: Từ Mission xem evidence.
- **Mission → Review**: Từ Mission xem kết quả review.
- **Review → Skill**: Từ Review xem Skill bị ảnh hưởng.
- **Review → Next Mission**: Từ Review xem nhiệm vụ tiếp theo.
- **Week → Missions**: Từ Week Plan xem các Mission trong tuần.
- **Weekly Review → Roadmap Adjustment**: Từ Weekly Review điều chỉnh Roadmap.
- **Skill → Evidence**: Từ Skill xem evidence chứng minh.
- **Evidence → Mission và Review**: Từ Evidence xem Mission và Review liên quan.

Không biến mọi object thành mục navigation cấp cao.

---

## 13. Global Next Action

Titan OS có khái niệm Product-level: Next Action.

Next Action được xác định theo thứ tự ưu tiên:

1. Tiếp tục Active Learning Session.
2. Hoàn thành Draft Daily Report.
3. Thực hiện Pending Review đang chặn Mission.
4. Xử lý Mission Needs Rework.
5. Gỡ Mission Blocked.
6. Xác nhận Daily Mission hôm nay.
7. Bắt đầu Primary Mission.
8. Hoàn thành Weekly Review đến hạn.
9. Chuẩn bị tuần mới.
10. Hoàn thành onboarding.

### Phân tích trường hợp nhiều hành động cùng tồn tại

- Nếu có Active Learning Session và Draft Daily Report: ưu tiên tiếp tục phiên.
- Nếu có Pending Review chặn Mission và Mission Needs Rework: ưu tiên review chặn.
- Nếu có nhiều Mission cần xử lý: ưu tiên theo thứ tự trên.

### Chỉ một hành động được coi là Primary Next Action

- Hệ thống xác định một hành động duy nhất là Primary Next Action.
- Các hành động khác là Secondary Actions.

Không thiết kế thuật toán kỹ thuật trong Task này.

---

## 14. Empty, Missing Và Recovery Information

### Today

- **Trạng thái chưa có dữ liệu**: Chưa có Daily Mission.
- **Dữ liệu tối thiểu cần có**: Career Context, trọng tâm hiện tại.
- **Hành động khởi tạo**: Hoàn thành onboarding, tạo Daily Mission đầu tiên.
- **Trạng thái dữ liệu thiếu**: Thiếu Career Context hoặc trọng tâm.
- **Hành động khôi phục**: Hoàn thành onboarding.
- **Liên kết đến bước tiếp theo**: Settings & Data (Career Context), Today (Daily Mission).

### Plan

- **Trạng thái chưa có dữ liệu**: Chưa có Roadmap hoặc Week Plan.
- **Dữ liệu tối thiểu cần có**: Career Context, mục tiêu.
- **Hành động khởi tạo**: Hoàn thành onboarding, tạo Week Plan đầu tiên.
- **Trạng thái dữ liệu thiếu**: Thiếu mục tiêu hoặc trọng tâm.
- **Hành động khôi phục**: Bổ sung Career Context.
- **Liên kết đến bước tiếp theo**: Settings & Data, Today.

### Reviews

- **Trạng thái chưa có dữ liệu**: Chưa có review nào.
- **Dữ liệu tối thiểu cần có**: Daily Report đã nộp.
- **Hành động khởi tạo**: Nộp Daily Report đầu tiên.
- **Trạng thái dữ liệu thiếu**: Chưa có báo cáo để review.
- **Hành động khôi phục**: Nộp báo cáo.
- **Liên kết đến bước tiếp theo**: Today.

### Progress

- **Trạng thái chưa có dữ liệu**: Chưa có Skill hoặc Evidence.
- **Dữ liệu tối thiểu cần có**: Trạng thái kỹ năng ban đầu.
- **Hành động khởi tạo**: Thiết lập trạng thái kỹ năng ban đầu trong onboarding.
- **Trạng thái dữ liệu thiếu**: Thiếu trạng thái kỹ năng.
- **Hành động khôi phục**: Bổ sung trạng thái kỹ năng.
- **Liên kết đến bước tiếp theo**: Settings & Data.

### Settings & Data

- **Trạng thái chưa có dữ liệu**: Chưa có Career Context.
- **Dữ liệu tối thiểu cần có**: Hồ sơ, mục tiêu, lịch học.
- **Hành động khởi tạo**: Hoàn thành onboarding.
- **Trạng thái dữ liệu thiếu**: Thiếu hồ sơ hoặc lịch học.
- **Hành động khôi phục**: Bổ sung dữ liệu còn thiếu.
- **Liên kết đến bước tiếp theo**: Today.

Không dùng empty state chỉ để mô tả giao diện.

---

## 15. Navigation Rules

- Tối đa năm mục cấp cao.
- Today là điểm vào mặc định.
- Không có Dashboard riêng.
- Daily Report và Learning Session không là mục cấp cao.
- Career Context nằm trong Settings & Data.
- Roadmap và Week Plan nằm trong Plan.
- Pending Review nằm trong Reviews nhưng có thể xuất hiện tham chiếu ở Today.
- Skill và Evidence nằm trong Progress.
- Không tạo menu cho Future Scope.
- Không tạo navigation theo cấu trúc database.
- Không sử dụng navigation nhiều tầng nếu không có nhu cầu rõ ràng.

---

## 16. Screen Inventory Handoff

Không thiết kế screen chi tiết. Chỉ cung cấp danh sách screen hoặc workspace mà Task 06 cần xem xét.

| Tên tạm thời | Khu vực sở hữu | User goal | Primary action | Dữ liệu cần có | Trạng thái chính |
|---|---|---|---|---|---|
| Onboarding | Settings & Data | Hoàn thành khởi tạo | Nhập Career Context, chọn trọng tâm | Career Context, mục tiêu, lịch học | Draft, Completed |
| Today | Today | Biết hôm nay cần làm gì | Xác nhận Daily Mission, bắt đầu phiên | Daily Mission, Learning Session, Daily Report | Ready, In Progress, Submitted |
| Daily Mission Detail | Today | Xem và xác nhận nhiệm vụ | Sửa và xác nhận Mission | Mission, output, evidence, tiêu chí | Draft, Ready |
| Learning Session | Today | Ghi phiên học | Bắt đầu, ghi, kết thúc phiên | Mission, nội dung, thời gian | Planned, Active, Completed, Abandoned |
| Daily Report | Today | Nộp báo cáo | Ghi output, evidence, nộp báo cáo | Learning Session, output, evidence | Draft, Submitted |
| Roadmap | Plan | Xem và điều chỉnh lộ trình | Xem mục tiêu, điều chỉnh | Career Context, mục tiêu, trọng tâm | — |
| Week Plan | Plan | Chuẩn bị tuần | Chọn Primary Focus, tạo khung nhiệm vụ | Roadmap, kết quả tuần | Planned, Active |
| Pending Reviews | Reviews | Thực hiện review | Đánh giá output, evidence | Daily Report, output, evidence | Pending |
| Review Detail | Reviews | Xem và thực hiện review | Ghi kết quả, điểm yếu, hành động | Output, evidence, tiêu chí | Pending, Passed, Rework, Blocked |
| Weekly Review | Reviews | Đánh giá tuần | Tổng hợp, chọn Primary Focus tuần sau | Daily Report, Skill, Roadmap | Review Due, Reviewed |
| Skill Tracking | Progress | Xem trạng thái kỹ năng | Xem kỹ năng và evidence | Skill, Evidence | Chưa bắt đầu, Đang học, Đã chứng minh |
| Evidence | Progress | Xem bằng chứng | Xem evidence và liên kết | Evidence, Skill, Mission, Review | Đã ghi, Đã xác nhận, Không hợp lệ |
| Career Context | Settings & Data | Quản lý hồ sơ | Sửa hồ sơ, mục tiêu, lịch học | Career Context | — |
| Data Management | Settings & Data | Quản lý dữ liệu | Backup, restore, export | Dữ liệu sản phẩm | — |

Không mô tả layout trong Task này.

Task tiếp theo dự kiến: Task 06 — MVP Screen Inventory và UX Requirements.

---

## 17. Open Questions Và Risks

### Nội dung chưa đủ rõ trong tài liệu nguồn

- Cách xác định chính xác "Pending Review đang chặn Mission" trong Today.
- Mức độ chi tiết của Progress History trong MVP.
- Cách hiển thị Data Completeness Incomplete trong Weekly Review.

### Navigation conflict

- Pending Review xuất hiện ở cả Reviews và Today (tham chiếu). Cần xác định rõ khu vực sở hữu là Reviews, Today chỉ hiển thị tham chiếu.

### Object có nguy cơ xuất hiện ở quá nhiều nơi

- Evidence xuất hiện ở Today, Reviews, Progress. Cần giữ nguồn sự thật ở Today, các nơi khác chỉ tham chiếu.

### Khu vực có nguy cơ trở thành Dashboard thụ động

- Progress có nguy cơ trở thành nơi chỉ xem số liệu. Cần đảm bảo Progress dẫn đến hành động (xem evidence, điều chỉnh lộ trình).

### Nội dung có nguy cơ tạo scope creep

- Progress History có nguy cơ mở rộng thành Analytics nâng cao. Cần giới hạn chỉ phục vụ mục tiêu MVP.

### Quyết định cần CTO xác nhận

- Cách xác định "Pending Review đang chặn Mission" trong Today.
- Mức độ chi tiết của Progress History trong MVP.
- Cách hiển thị Data Completeness Incomplete trong Weekly Review.

Không tự thêm capability để giải quyết vấn đề.

---

## 18. Kết Luận IA

### Năm khu vực cấp cao

1. Today.
2. Plan.
3. Reviews.
4. Progress.
5. Settings & Data.

### Điểm vào mặc định

- Today.

### Primary Next Action

- Được xác định theo thứ tự ưu tiên 10 bước trong Mục 13. Chỉ một hành động là Primary Next Action tại mỗi thời điểm.

### Nguồn sự thật của từng object chính

- Career Context: Settings & Data.
- Roadmap: Plan.
- Week Plan: Plan.
- Mission: Today.
- Learning Session: Today.
- Daily Report: Today.
- Output: Today.
- Evidence: Today.
- Review: Reviews.
- Skill: Progress.
- Weekly Review: Reviews.
- Backup Record: Settings & Data.

### Điều kiện chuyển sang Screen Inventory

- Phạm vi IA được CTO phê duyệt.
- Năm khu vực cấp cao được xác nhận.
- Content Ownership Matrix được chốt.
- Open Questions trong Mục 17 được trả lời.
