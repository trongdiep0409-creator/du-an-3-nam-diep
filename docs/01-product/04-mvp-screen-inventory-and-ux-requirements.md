# Titan OS — MVP Screen Inventory and UX Requirements

> Tài liệu này chốt các workspace/view cần thiết cho MVP và yêu cầu UX của từng view.
> Nguồn sự thật: toàn bộ tài liệu trong docs/00-context và docs/01-product.
> Các quyết định CTO đã phê duyệt là bắt buộc trong tài liệu này.

---

## 1. Mục Đích

Tài liệu này dùng để:

- **Chốt các workspace/view cần thiết**: Xác định đúng số lượng view cho MVP.
- **Ngăn screen explosion**: Giới hạn tối đa 14 canonical view.
- **Xác định mục tiêu và hành động của từng view**: Mỗi view có user goal và primary action rõ ràng.
- **Xác định trạng thái UX**: Mỗi view xử lý các trạng thái phù hợp.
- **Làm đầu vào cho wireframe và product data model**: Cung cấp thông tin cho Task 07.

---

## 2. UX Principles

- **Action First**: Thông tin tổ chức để hành động, không chỉ xem.
- **One Primary Action**: Mỗi thời điểm chỉ một hành động chính.
- **One Main Focus At A Time**: Một trọng tâm chính mỗi ngày.
- **Progressive Disclosure**: Thông tin chi tiết xuất hiện khi cần.
- **Do Not Repeat Input**: Không nhập lại cùng dữ liệu.
- **Preserve History**: Lịch sử không bị ghi đè.
- **Recoverable Work**: Công việc bỏ dở có thể tiếp tục.
- **Clear Status**: Trạng thái hiện tại luôn rõ ràng.
- **Evidence in Context**: Evidence xuất hiện trong ngữ cảnh hành động.
- **No Passive Dashboard**: Không có dashboard chỉ để xem số.
- **No AI Dependency for MVP**: MVP không phụ thuộc AI để hoàn thành vòng lặp.

---

## 3. Screen Consolidation Rules

- Cùng user goal thì ưu tiên cùng workspace.
- State khác nhau không tự động tạo screen mới.
- Form ngắn không cần screen riêng.
- Detail View chỉ tạo khi object cần nhiều hành động hoặc history.
- Dialog/panel chỉ được đề xuất ở cấp UX, không thiết kế component.
- Không vượt quá 14 workspace/view chuẩn.
- Future Scope không có screen hoặc placeholder.

---

## 4. Canonical Screen Inventory

| ID | Tên tạm thời | Loại view | Khu vực sở hữu | User goal | Primary action | Entry condition | Exit result |
|---|---|---|---|---|---|---|---|
| V01 | Onboarding | Task Flow | Settings & Data | Hoàn thành khởi tạo | Nhập Career Context, chọn trọng tâm, tạo Mission đầu tiên | Onboarding chưa hoàn thành | Onboarding hoàn thành, vào Today |
| V02 | Today Workspace | Top-level Workspace | Today | Biết hôm nay cần làm gì | Xác nhận Mission, bắt đầu phiên, nộp báo cáo | Onboarding hoàn thành | Daily Report Submitted |
| V03 | Mission Detail | Detail View | Today | Xem và xác nhận nhiệm vụ | Sửa và xác nhận Mission | Có Mission Draft hoặc Ready | Mission Ready |
| V04 | Learning Session Flow | Task Flow | Today | Ghi phiên học | Bắt đầu, ghi, kết thúc phiên | Mission Ready | Session Completed |
| V05 | Daily Report Flow | Task Flow | Today | Nộp báo cáo | Ghi output, evidence, nộp báo cáo | Có Session Completed | Daily Report Submitted |
| V06 | Plan Workspace | Top-level Workspace | Plan | Xem và điều chỉnh lộ trình | Xem mục tiêu, điều chỉnh Roadmap | Onboarding hoàn thành | Roadmap cập nhật |
| V07 | Week Plan Flow | Task Flow | Plan | Chuẩn bị tuần | Chọn Primary Focus, tạo khung nhiệm vụ | Đầu tuần hoặc sau Weekly Review | Week Plan sẵn sàng |
| V08 | Review Queue | Top-level Workspace | Reviews | Thực hiện review | Đánh giá output, evidence | Có Pending Review | Review hoàn tất |
| V09 | Review Detail | Detail View | Reviews | Xem và thực hiện review | Ghi kết quả, điểm yếu, hành động | Có Pending Review | Review Passed/Rework/Blocked |
| V10 | Weekly Review Flow | Task Flow | Reviews | Đánh giá tuần | Tổng hợp, chọn Primary Focus tuần sau | Week Review Due | Weekly Review Reviewed |
| V11 | Progress Workspace | Top-level Workspace | Progress | Xem kỹ năng và evidence | Xem trạng thái kỹ năng, evidence | Onboarding hoàn thành | Người dùng biết bước tiếp theo |
| V12 | Skill Detail | Detail View | Progress | Xem chi tiết kỹ năng | Xem evidence, review nguồn | Có Skill | Biết kỹ năng đang ở đâu |
| V13 | Evidence Detail | Detail View | Progress | Xem chi tiết bằng chứng | Xem evidence và liên kết | Có Evidence | Biết evidence chứng minh gì |
| V14 | Settings & Data Workspace | Top-level Workspace | Settings & Data | Quản lý hồ sơ và dữ liệu | Sửa hồ sơ, backup, restore, export | Luôn truy cập được | Career Context/Data cập nhật |

Tổng cộng: 14 canonical view. Không vượt quá giới hạn.

---

## 5. Onboarding UX Requirements

- **User goal**: Thiết lập nền tảng dữ liệu cho toàn bộ hành trình.
- **Các bước**: Nhập Career Context, xác nhận mục tiêu, nhập điểm mạnh/yếu, xác nhận lịch học, chọn trọng tâm, thiết lập Skill ban đầu, tạo tuần đầu tiên, tạo bản nháp Primary Mission.
- **Dữ liệu tối thiểu**: Career Context, mục tiêu, lịch học, trọng tâm, trạng thái Skill.
- **Draft behavior**: Dữ liệu đã nhập được lưu nháp, có thể tiếp tục sau.
- **Resume behavior**: Hiển thị bước còn thiếu, tiếp tục từ điểm dở.
- **Validation**: Yêu cầu đầy đủ các trường bắt buộc trước khi hoàn thành.
- **Trường hợp chưa biết trọng tâm**: Career Context lưu nháp, onboarding chưa hoàn thành.
- **Điều kiện hoàn thành**: Career Context đủ, mục tiêu xác nhận, lịch học xác nhận, có Skill ban đầu, có Current Focus, có bản nháp Primary Mission đầu tiên.
- **Primary Next Action sau onboarding**: Xác nhận Daily Mission đầu tiên.

---

## 6. Today Workspace Requirements

| Trạng thái | Thông tin cần thấy | Primary action | Secondary action | Không được phép | Next state |
|---|---|---|---|---|---|
| Onboarding incomplete | Nhắc hoàn thành onboarding | Complete Onboarding | — | Tạo Mission | Onboarding hoàn thành |
| No Mission | Trọng tâm hiện tại | Tạo Daily Mission | Xem Plan | Bắt đầu phiên | Mission Draft |
| Mission Draft | Mission chưa xác nhận | Xác nhận Mission | Sửa Mission | Bắt đầu phiên | Mission Ready |
| Mission Ready | Mission đã sẵn sàng | Bắt đầu Learning Session | Sửa Mission | Nộp báo cáo | Active Session |
| Active Session | Phiên đang diễn ra | Tiếp tục/Kết thúc phiên | Ghi khó khăn | Nộp báo cáo | Session Completed |
| Draft Daily Report | Báo cáo chưa nộp | Hoàn thành báo cáo | Lưu nháp | Bắt đầu phiên mới | Submitted Report |
| Submitted Report | Báo cáo đã nộp | Chờ review | Xem báo cáo | Sửa báo cáo đã nộp | Pending Review |
| Pending Review blocking | Mission chờ review | Thực hiện review | Xem Mission | Tạo Mission mới | Review hoàn tất |
| Needs Rework | Mission cần làm lại | Xử lý làm lại | Xem lý do | Bỏ qua | In Progress |
| Blocked Mission | Mission bị chặn | Gỡ blocker | Xem nhiệm vụ thay thế | Đánh dấu Đạt | In Progress hoặc Blocked |
| Daily Close complete | Bản nháp ngày sau | Xem bản nháp | — | Tạo Mission mới | Ngày sau |
| Skipped Day | Ngày bỏ trống | Chuyển nhiệm vụ | Điều chỉnh ở Weekly Review | Tự động thất bại | Ngày sau |

Không mô tả layout.

---

## 7. Mission Detail Requirements

- **Primary hoặc Supporting**: Xác định loại Mission.
- **Mục tiêu**: Mục tiêu của Mission.
- **Output bắt buộc**: Output cần tạo.
- **Evidence bắt buộc**: Evidence cần có.
- **Tiêu chí hoàn thành**: Tiêu chí rõ ràng.
- **Ước lượng thời gian**: Thời gian dự kiến.
- **Trạng thái**: Draft, Ready, In Progress, Submitted, Completed, Needs Rework, Blocked.
- **Sessions liên quan**: Các Learning Session của Mission.
- **Report liên quan**: Daily Report liên quan.
- **Review liên quan**: Kết quả review.
- **History**: Lịch sử thay đổi.

Quy tắc chỉnh sửa Mission:

- **Draft**: được sửa trực tiếp.
- **Ready và chưa có Learning Session**: có thể Reopen to Draft để sửa.
- **In Progress, Submitted, Completed, Needs Rework hoặc Blocked**: không sửa trực tiếp định nghĩa Mission.
- **Rework phải tạo Attempt mới** hoặc tiếp tục theo quy tắc Rework.
- **History phải được giữ**.
- **Không cho phép ghi đè Mission cũ**.

Mission Completed chỉ xảy ra sau Review Passed.

---

## 8. Learning Session Flow Requirements

- **Bắt đầu**: Ghi thời gian bắt đầu.
- **Active**: Ghi nội dung, khó khăn, blocker.
- **Hoàn thành**: Ghi kết quả, thời gian kết thúc.
- **Bỏ dở**: Đánh dấu Abandoned, ghi lý do.
- **Khôi phục sau khi ứng dụng bị đóng**: Hiển thị phiên Active, tiếp tục hoặc kết thúc.
- **Nhiều session cho một Mission**: Cho phép nhiều Learning Session phục vụ một Mission.
- **Blocker trong session**: Ghi blocker, có thể chuyển Mission sang Blocked.
- **Chuyển dữ liệu sang Daily Report**: Session Completed được tổng hợp vào Daily Report.

Không biến thành timer phức tạp.

---

## 9. Daily Report Flow Requirements

- **Draft**: Tạo báo cáo nháp.
- **Autosave**: Lưu tự động ở cấp yêu cầu sản phẩm.
- **Tổng hợp Sessions**: Liệt kê Learning Session liên quan.
- **Output**: Ghi output đã tạo.
- **Liên kết Evidence**: Thêm hoặc tham chiếu Evidence.
- **Khó khăn**: Ghi khó khăn gặp phải.
- **Tự đánh giá**: Người dùng tự đánh giá.
- **Validation trước khi Submit**: Kiểm tra output và evidence bắt buộc.
- **Chỉnh sửa sau Submit**: Không được ghi đè bản đã Submit. Được tạo revision mới. Revision phải giữ liên kết với bản trước. Nếu báo cáo đã được review, revision mới tạo Pending Review mới. Review cũ vẫn được giữ trong history.
- **History**: Lưu lịch sử chỉnh sửa.

Không quyết định cơ chế lưu kỹ thuật.

---

## 10. Plan và Week Plan Requirements

### Plan Workspace

- Mục tiêu 1, 2, 3 năm.
- Current Focus.
- Kết quả đang hướng tới.
- Roadmap history.

### Week Plan Flow

- Primary Focus.
- Kết quả tuần.
- Output tuần.
- Evidence tuần.
- Khung Mission.
- Rework tồn đọng.

### Khi nào được sửa

- Week Plan: khi chuẩn bị tuần.
- Roadmap: sau Weekly Review.

### Khi nào chỉ xem

- Mục tiêu 1, 2, 3 năm: chỉ xem.
- Roadmap history: chỉ xem.

### Khi nào cần xác nhận

- Week Plan: xác nhận trước khi bắt đầu tuần.
- Roadmap adjustment: xác nhận sau Weekly Review.

### Khi nào thay đổi ảnh hưởng Today

- Sửa Primary Focus: ảnh hưởng Daily Mission.
- Sửa khung Mission: ảnh hưởng Daily Mission.

---

## 11. Reviews Requirements

### Review Queue

- Pending Review blocking.
- Pending Review trong ngày.
- Weekly Review đến hạn.
- Review khác.

### Review Detail

- Output.
- Evidence.
- Tiêu chí.
- Kết quả.
- Lý do.
- Điểm yếu.
- Hành động tiếp theo.

Kết quả chỉ có: Passed, Rework, Blocked.

Phải có UX rõ cho review thủ công có cấu trúc. Không biến thành AI chat.

### Pending Review và Needs Rework

- Một Mission Attempt không thể vừa Pending Review vừa Needs Rework.
- Pending Review nghĩa là chưa có kết quả review.
- Needs Rework nghĩa là review đã kết thúc với kết quả Rework.
- Nếu thuộc các Mission khác nhau, Pending Review đang chặn được ưu tiên trước.

---

## 12. Weekly Review Requirements

- **Mission summary**: Tổng hợp Mission trong tuần.
- **Session summary**: Tổng hợp Learning Session.
- **Output**: Tổng hợp output.
- **Evidence**: Tổng hợp evidence.
- **Điểm yếu lặp lại**: Xác định điểm yếu lặp lại.
- **Skill changes**: Xem Skill thay đổi.
- **Roadmap adherence**: Đánh giá mức độ bám Roadmap.
- **Rework**: Xác định việc cần làm lại.
- **Primary Focus tuần sau**: Chọn Primary Focus.
- **Data Completeness**: Complete hoặc Incomplete.

Khi Incomplete:

- Hiển thị dữ liệu thiếu.
- Hiển thị ảnh hưởng tới kết luận.
- Cho phép bổ sung hoặc chấp nhận dữ liệu thiếu.
- Không tạo kết luận giả.

---

## 13. Progress Requirements

### Progress Workspace

Chỉ gồm: Skill, Evidence, Điểm yếu lặp lại, Progress History giới hạn.

### Skill Detail

- Trạng thái: Chưa bắt đầu, Đang học, Đã chứng minh.
- Evidence xác nhận.
- Review nguồn.
- Điểm yếu.
- History.

### Evidence Detail

- Evidence chuẩn.
- Trạng thái hợp lệ: Đã ghi, Đã xác nhận, Không hợp lệ.
- Skill liên quan.
- Mission nguồn.
- Review xác nhận.
- History.

Progress phải dẫn đến hành động: Xem Evidence, Xem Review nguồn, Điều chỉnh Plan khi cần.

Không thêm score, level, ranking hoặc chart nâng cao.

### Quyết định: Skill Detail và Evidence Detail giữ riêng biệt

- **Skill Detail**: giữ riêng. Tổng hợp trạng thái năng lực, liên kết Evidence và Review nguồn, và history.
- **Evidence Detail**: giữ riêng. Mô tả một bằng chứng cụ thể, trạng thái hợp lệ, Skill được chứng minh, Mission nguồn, Review xác nhận, history.
- **Không hợp nhất trong MVP**.

Lý do:

- Skill Detail tổng hợp trạng thái năng lực — mỗi Skill có thể gắn nhiều Evidence và nhiều Review.
- Evidence Detail mô tả một bằng chứng cụ thể — mỗi Evidence chỉ gắn với một Skill và một Attempt cụ thể.
- Hai view phục vụ user goal khác nhau: Skill Detail trả lời "kỹ năng này đang ở đâu?", Evidence Detail trả lời "bằng chứng này chứng minh gì?".

---

## 14. Settings & Data Requirements

- **Career Context**: Hồ sơ, điểm mạnh, điểm yếu, mục tiêu, lịch học, trọng tâm.
- **Career Goals**: Mục tiêu 1, 2, 3 năm.
- **Current Focus**: Trọng tâm hiện tại.
- **Lịch học**: Khung giờ và phân bổ.
- **Backup**: Tạo bản sao dữ liệu.
- **Restore**: Phục hồi dữ liệu.
- **Export**: Xuất dữ liệu.
- **Backup status**: Trạng thái backup gần nhất.
- **Backup failure**: Cảnh báo backup thất bại.
- **Restore recovery**: Đưa người dùng tới Primary Next Action hợp lệ.

Sửa Current Focus phải cảnh báo ảnh hưởng tới Plan và Today. Restore phải đưa người dùng tới Primary Next Action hợp lệ.

### Settings & Data luôn có thể truy cập

- **Trước khi onboarding hoàn thành**: người dùng truy cập Settings & Data để hoàn thành các phần phục vụ onboarding (Career Context, Current Focus, lịch học).
- **Sau onboarding**: người dùng có thể sử dụng toàn bộ Career Context và Data Management.
- **Không yêu cầu onboarding hoàn thành mới được vào Settings & Data.**

---

## 15. State Coverage Matrix

| View | Empty | Draft | Active | Completed | Error | Recovery |
|---|---|---|---|---|---|---|
| Onboarding | Có | Có | — | Có | Có | Có |
| Today | Có | Có | Có | Có | Có | Có |
| Mission Detail | — | Có | Có | Có | Có | Có |
| Learning Session | — | — | Có | Có | Có | Có |
| Daily Report | — | Có | — | Có | Có | Có |
| Plan | Có | — | — | — | — | Có |
| Week Plan | Có | Có | Có | Có | — | Có |
| Review Queue | Có | — | — | Có | — | — |
| Review Detail | — | — | Có | Có | Có | — |
| Weekly Review | Có | Có | — | Có | — | Có |
| Progress | Có | — | — | — | — | — |
| Skill Detail | Có | — | — | — | — | — |
| Evidence Detail | Có | — | — | — | Có | — |
| Settings & Data | Có | — | — | — | Có | Có |

Mọi view phải có trạng thái phù hợp. Không ép mọi view phải có mọi trạng thái.

---

## 16. Validation Requirements

| Lỗi | Nguyên nhân | Thông báo người dùng cần hiểu | Hành động sửa | Dữ liệu được giữ lại |
|---|---|---|---|---|
| Required | Thiếu trường bắt buộc | Trường X là bắt buộc | Nhập trường thiếu | Có |
| Invalid Evidence | Evidence không truy cập được | Evidence không hợp lệ | Sửa hoặc thay evidence | Có |
| Missing Output | Không có output | Mission cần output | Tạo output | Có |
| Missing Completion Criteria | Không có tiêu chí | Mission cần tiêu chí hoàn thành | Thêm tiêu chí | Có |
| Conflicting Primary Mission | Hai Mission cùng Primary | Chỉ một Primary Mission mỗi ngày | Chọn một Primary | Có |
| Session still Active | Phiên chưa kết thúc | Phiên đang diễn ra | Kết thúc hoặc bỏ dở | Có |
| Report already Submitted | Báo cáo đã nộp | Báo cáo đã nộp, tạo revision mới | Tạo revision (giữ lịch sử) | Có |
| Review dependency | Review chưa hoàn thành chặn Mission | Mission chờ review | Hoàn thành review | Có |
| Restore conflict | Dữ liệu restore xung đột | Xung đột dữ liệu restore | Chọn giữ hoặc ghi đè | Có |

Không viết nội dung microcopy cuối cùng.

---

## 17. Draft, History và Recovery

- **Nội dung có Draft**: Onboarding, Mission, Daily Report, Week Plan, Weekly Review.
- **Nội dung autosave**: Daily Report, Learning Session Active.
- **Nội dung cần History**: Mission, Daily Report, Review, Skill, Evidence, Roadmap, Weekly Review.
- **Khi sửa dữ liệu cũ cần review lại**: Sửa Daily Report đã Reviewed, sửa Evidence đã xác nhận.
- **Cách tiếp tục công việc bỏ dở**: Hiển thị bước còn thiếu, tiếp tục từ điểm dở.
- **Không được mất dữ liệu người dùng đã nhập**: Mọi dữ liệu đã nhập được giữ.

Chỉ là product requirement.

---

## 18. UX Priority Matrix

| View | Frequency | Importance | Failure Impact | MVP Priority |
|---|---|---|---|---|
| Onboarding | Một lần | Critical | Critical | Critical |
| Today | Hằng ngày | Critical | Critical | Critical |
| Mission Detail | Hằng ngày | High | High | Critical |
| Learning Session | Hằng ngày | High | High | Critical |
| Daily Report | Hằng ngày | Critical | Critical | Critical |
| Plan | Hằng tuần | High | High | High |
| Week Plan | Hằng tuần | High | High | High |
| Review Queue | Hằng ngày | Critical | Critical | Critical |
| Review Detail | Hằng ngày | Critical | Critical | Critical |
| Weekly Review | Hằng tuần | High | High | High |
| Progress | Theo nhu cầu | Medium | Medium | Medium |
| Skill Detail | Theo nhu cầu | Medium | Medium | Medium |
| Evidence Detail | Theo nhu cầu | Medium | Medium | Medium |
| Settings & Data | Hiếm | High | Critical | High |

Không dùng Low cho view đã nằm trong MVP.

---

## 19. Flow Traceability

| View | Product Flow | Information Object | Primary Next Action | Success Criterion |
|---|---|---|---|---|
| Onboarding | Khởi tạo | Career Context, Mission | Xác nhận Daily Mission đầu tiên | Onboarding hoàn thành |
| Today | Vòng lặp ngày | Mission, Session, Daily Report | Bắt đầu Primary Mission | Daily Report Submitted |
| Mission Detail | Xác nhận nhiệm vụ | Mission | Bắt đầu Learning Session | Mission Ready |
| Learning Session | Thực hiện nhiệm vụ | Learning Session | Kết thúc phiên | Session Completed |
| Daily Report | Nộp báo cáo | Daily Report, Output, Evidence | Nộp báo cáo | Daily Report Submitted |
| Plan | Quản lý lộ trình | Roadmap, Week Plan | Chuẩn bị tuần | Week Plan sẵn sàng |
| Week Plan | Chuẩn bị tuần | Week Plan | Bắt đầu ngày học | Week Plan Active |
| Review Queue | Đánh giá | Review | Thực hiện review | Review hoàn tất |
| Review Detail | Thực hiện review | Review, Output, Evidence | Ghi kết quả | Review Passed/Rework/Blocked |
| Weekly Review | Đánh giá tuần | Weekly Review, Skill | Điều chỉnh Roadmap | Weekly Review Reviewed |
| Progress | Theo dõi tiến bộ | Skill, Evidence | Xem Evidence/Review nguồn | Biết bước tiếp theo |
| Skill Detail | Xem kỹ năng | Skill, Evidence | Xem Evidence | Biết kỹ năng đang ở đâu |
| Evidence Detail | Xem bằng chứng | Evidence, Mission, Review | Xem Mission/Review liên quan | Biết evidence chứng minh gì |
| Settings & Data | Quản lý dữ liệu | Career Context, Backup | Sửa hồ sơ/Backup | Career Context/Data cập nhật |

Mọi view truy vết được về Product Vision, MVP Flow, Information Architecture.

---

## 20. Screen Acceptance Criteria Matrix

| View | Observable Success |
|---|---|
| V01 Onboarding | Career Context được lưu, trọng tâm được chọn, bản nháp Primary Mission đầu tiên được tạo. Người dùng có thể vào Today. |
| V02 Today Workspace | Primary Mission hiển thị đúng, trạng thái Mission/Session/Report hiện tại rõ ràng, Daily Report Submitted khi người dùng nộp. |
| V03 Mission Detail | Mission có mục tiêu, output, evidence, tiêu chí đầy đủ. Xác nhận Mission chuyển sang Ready. |
| V04 Learning Session Flow | Session ghi thời gian bắt đầu/kết thúc, nội dung, kết quả. Session Completed khi kết thúc. |
| V05 Daily Report Flow | Daily Report ghi output, evidence, khó khăn, tự đánh giá. Daily Report Submitted khi nộp. |
| V06 Plan Workspace | Mục tiêu 1/2/3 năm, trọng tâm, kết quả đang hướng tới và Roadmap history hiển thị. |
| V07 Week Plan Flow | Primary Focus, output, evidence, khung Mission và rework tồn đọng được lên kế hoạch. Week Plan sẵn sàng khi xác nhận. |
| V08 Review Queue | Pending Review, Needs Rework và Weekly Review đến hạn hiển thị đúng thứ tự ưu tiên. |
| V09 Review Detail | Output, evidence, tiêu chí, lý do, điểm yếu, hành động tiếp theo hiển thị. Kết quả review được ghi là Passed/Rework/Blocked. |
| V10 Weekly Review Flow | Mission, Session, output, evidence tổng hợp đúng. Data Completeness được ghi. Weekly Review Reviewed. |
| V11 Progress Workspace | Trạng thái Skill cập nhật đúng (Chưa bắt đầu/Đang học/Đã chứng minh). Evidence và điểm yếu lặp lại hiển thị. |
| V12 Skill Detail | Skill hiển thị trạng thái, Evidence xác nhận, Review nguồn, điểm yếu và history. |
| V13 Evidence Detail | Evidence hiển thị trạng thái hợp lệ, Skill liên quan, Mission nguồn, Review xác nhận và history. |
| V14 Settings & Data Workspace | Career Context và Data Management (backup/restore/export) hiển thị. Career Context cập nhật sau khi sửa. |

---

## 21. Open Questions và Handoff

### View còn có thể hợp nhất

- (Đã quyết định) Skill Detail và Evidence Detail giữ riêng biệt trong MVP. Xem Mục 13.

### View có nguy cơ quá tải

- Today Workspace có nhiều trạng thái (12 trạng thái). Cần đảm bảo Progressive Disclosure hoạt động tốt.

### State có nguy cơ mâu thuẫn

- (Đã quyết định) Pending Review và Needs Rework không cùng tồn tại trên một Mission Attempt. Nếu thuộc Mission khác nhau, Pending Review được ưu tiên. Xem Mục 11.

### UX requirement cần Product Owner xác nhận

- Mức độ chi tiết của Progress History hiển thị trong Progress Workspace.
- Cách hiển thị Data Completeness Incomplete trong Weekly Review.

### Dữ liệu mà Product Data Model cần hỗ trợ

- Career Context, Career Goals, Current Focus.
- Roadmap, Week Plan.
- Mission, Learning Session, Daily Report, Output, Evidence.
- Review, Weekly Review (với Data Completeness).
- Skill (với 3 trạng thái), Progress History.
- Backup Record.

Task tiếp theo dự kiến: Task 07 — Product Data Model và Business Rules.
