# Titan OS — Product Data Model and Business Rules

## 1. Mục đích tài liệu

Tài liệu này dùng để:

- **Chốt các business object của MVP**: Xác định các khái niệm nghiệp vụ tồn tại trong MVP.
- **Xác định nguồn sự thật**: Mỗi thông tin có một nguồn sở hữu duy nhất.
- **Xác định relationship và lifecycle**: Mối quan hệ và vòng đời của từng object.
- **Ngăn dữ liệu mâu thuẫn**: Các invariant và business rule bảo vệ toàn vẹn dữ liệu.
- **Bảo vệ history**: Không ghi đè, không xóa âm thầm.
- **Làm đầu vào cho Functional Requirements và Technical Data Design** sau này.

---

## 2. Modeling Principles

- **One Source of Truth**: Mỗi loại thông tin có một khu vực hoặc object sở hữu duy nhất.
- **Preserve History**: Mọi thay đổi đều được lưu lại, không ghi đè bản cũ.
- **No Silent Overwrite**: Không thay đổi dữ liệu mà người dùng không biết.
- **Evidence Before Skill**: Skill chỉ chuyển trạng thái khi có Evidence được xác nhận.
- **Review Before Completion**: Mission chỉ Completed khi Review Passed.
- **One Main Focus At A Time**: Mỗi thời điểm chỉ có một Primary Mission.
- **Recoverable Draft**: Draft chưa dùng có thể khôi phục.
- **Explicit State Transition**: Mọi chuyển trạng thái đều có trigger và điều kiện.
- **Derived Data Is Not Source Data**: Thông tin suy ra không được lưu như nguồn.
- **Local-first ownership**: Dữ liệu thuộc về người dùng, chạy trên máy cá nhân.
- **Dữ liệu phải dùng được trong ít nhất 3 năm**: Kiến trúc và định dạng dữ liệu phải bền vững trong 3 năm.

---

## 3. Canonical Business Objects

| Object | Ý nghĩa | Khu vực sở hữu | Được tạo bởi | Lifecycle chính | History |
|---|---|---|---|---|---|
| Career Context | Hồ sơ nghề nghiệp: hồ sơ, điểm mạnh/yếu, lịch học, mục tiêu, trọng tâm, trạng thái onboarding | Settings & Data | Người dùng | Draft → Completed (onboarding) | Có |
| Career Goal | Mục tiêu 1 năm, 2 năm, 3 năm | Settings & Data | Người dùng | Draft → Active | Có |
| Current Focus | Trọng tâm học tập đang hoạt động | Settings & Data | Người dùng | Active → Archived (chuyển focus) | Có |
| Roadmap | Định hướng học tập hiện hành | Plan | Hệ thống (từ Career Context) | Active → Archived | Có |
| Roadmap Revision | Lịch sử điều chỉnh Roadmap | Plan | Hệ thống (sau Weekly Review) | Draft → Final | Có |
| Week Plan | Kế hoạch tuần: Primary Focus, kết quả, output, evidence, khung Mission | Plan | Người dùng | Planned → Active → Reviewed | Có |
| Mission | Một nhiệm vụ học tập cụ thể (Primary hoặc Supporting) | Today | Hệ thống / Người dùng | Draft → Ready → In Progress → Submitted → Completed | Có |
| Mission Attempt | Một lần thực hiện Mission (supporting record) | Today | Hệ thống | New → In Progress → Submitted → Reviewed | Có |
| Learning Session | Phiên thực hiện nhiệm vụ: thời gian, nội dung, kết quả | Today | Người dùng | Planned → Active → Completed/Abandoned | Có |
| Daily Report | Báo cáo hằng ngày: output, evidence, review | Today | Người dùng | Draft → Submitted → Reviewed | Có |
| Daily Report Revision | Bản sửa bản ghi Daily Report đã Submit (supporting record) | Today | Người dùng | Draft → Pending Review | Có |
| Output | Sản phẩm người dùng tạo ra trong quá trình học | Today | Người dùng | Draft → Available | Có |
| Evidence | Bằng chứng chứng minh năng lực | Progress | Người dùng | Recorded → Verified/Invalid | Có |
| Review | Đánh giá output, evidence và tiêu chí của một Mission Attempt | Reviews | Người dùng (thủ công) | Pending → Passed/Rework/Blocked | Có |
| Weakness Observation | Ghi nhận một điểm yếu tại một thời điểm | Reviews | Người dùng | Open → Resolved | Có |
| Skill | Kỹ năng đang theo dõi trong career | Progress | Hệ thống (từ Career Context) | Not Started → In Progress → Proven | Có |
| Skill History Entry | Lịch sử thay đổi trạng thái Skill (supporting record) | Progress | Hệ thống | Created → Recorded | Có |
| Weekly Review | Đánh giá tổng hợp tuần: Mission, Session, output, evidence, weakness | Reviews | Người dùng | Review Due → Reviewed | Có |
| Backup Record | Nghiệp vụ backup: thời điểm, kết quả, phạm vi, trạng thái | Settings & Data | Hệ thống | Started → Success/Failed | Có |

**Supporting records**: Mission Attempt, Daily Report Revision, Roadmap Revision, Skill History Entry. Chúng không phải capability hoặc navigation mới. Chúng là bản ghi hỗ trợ duy trì history và revision.

---

## 4. Career Context Model

**Career Context** là hồ sơ nghề nghiệp duy nhất của người dùng.

Career Context chứa:

- **Hồ sơ nghề nghiệp**: Thông tin cá nhân, công việc hiện tại.
- **Điểm mạnh**: Danh sách điểm mạnh đã xác định.
- **Điểm yếu**: Danh sách điểm yếu (cập nhật dựa trên review).
- **Lịch học**: Khung giờ và phân bổ thời gian trong tuần.
- **Mục tiêu nghề nghiệp**: Career Goals mục tiêu 1, 2, 3 năm.
- **Current Focus**: Trọng tâm học tập hiện tại.
- **Trạng thái onboarding**: Draft hoặc Completed.

**Business rules:**

- Chỉ có một Career Context đang hoạt động.
- Career Context có thể tồn tại dạng Draft (onboarding chưa hoàn thành).
- Onboarding không hoàn thành chỉ vì Career Context đã được tạo — cần phải có Current Focus, Skill ban đầu và bản nháp Primary Mission.
- Thay đổi Current Focus phải giữ history.
- Thay đổi lịch học ảnh hưởng Week Plan tương lai, không tự sửa lịch sử cũ.

---

## 5. Career Goal và Current Focus

**Career Goal** hỗ trợ ba mốc thời gian:

- **Mục tiêu 1 năm**: Ví dụ — tự triển khai website doanh nghiệp từ đầu đến cuối.
- **Mục tiêu 2 năm**: Ví dụ — giúp doanh nghiệp có website, traffic và dữ liệu.
- **Mục tiêu 3 năm**: Ví dụ — tự tin phụ trách toàn bộ hệ thống Digital cho doanh nghiệp.

**Current Focus** là trọng tâm học tập chính tại thời điểm hiện tại.

**Business rules:**

- Chỉ có một Current Focus đang hoạt động.
- Current Focus có thời điểm bắt đầu.
- Focus cũ phải được giữ trong lịch sử.
- Thay đổi Focus không được tự động ghi đè Mission đang In Progress.

---

## 6. Roadmap Model

**Roadmap** mô tả định hướng học tập hiện hành: mục tiêu, trọng tâm, kết quả đang hướng tới, thứ tự ưu tiên.

**Roadmap Revision** là lịch sử thay đổi Roadmap — mỗi lần điều chỉnh sau Weekly Review tạo một revision.

**Business rules:**

- Có một Roadmap hiện hành.
- Mọi điều chỉnh sau Weekly Review tạo revision mới.
- Roadmap cũ không bị ghi đè.
- Roadmap chỉ mô tả cấp độ cần thiết cho MVP — đủ để sinh Week Plan và Daily Mission.
- Không tạo roadmap nhiều tầng phức tạp.

---

## 7. Week Plan Model

**Week Plan** chứa:

- **Khoảng thời gian tuần**: Tuần bắt đầu, tuần kết thúc.
- **Primary Focus**: Trọng tâm chính của tuần.
- **Kết quả tuần**: Output và evidence mong đợi.
- **Output tuần**: Danh sách output dự kiến.
- **Evidence tuần**: Danh sách evidence cần có.
- **Khung Mission**: Các Mission được lên kế hoạch cho các ngày trong tuần.
- **Rework tồn đọng**: Các Mission cần làm lại từ tuần trước.
- **Trạng thái Week**: Planned, Active, Review Due, Reviewed.

**Business rules:**

- Một tuần chỉ có một Week Plan hiện hành.
- Week Plan phải được xác nhận trước ngày học đầu tiên.
- Thay đổi Week Plan sau khi tuần bắt đầu phải giữ history.
- Weekly Review tạo đầu vào cho Week Plan tiếp theo.
- Thứ 7 là ngày nghỉ theo Context hiện tại nhưng không hard-code như quy tắc vĩnh viễn.

---

## 8. Mission Model

**Mission** đại diện cho một nhiệm vụ học tập cụ thể cần hoàn thành.

Mission phải có:

- **Loại**: Primary hoặc Supporting.
- **Mục tiêu**: Mục tiêu cụ thể của Mission.
- **Output bắt buộc**: Output cần tạo để hoàn thành.
- **Evidence bắt buộc**: Evidence cần có để chứng minh.
- **Tiêu chí hoàn thành**: Danh sách tiêu chí rõ ràng.
- **Ước lượng thời gian**: Thời gian dự kiến.
- **Ngày dự kiến**: Ngày Mission được thực hiện.
- **Trạng thái**: Draft, Ready, In Progress, Submitted, Completed, Needs Rework, Blocked.
- **Mission nguồn nếu là Rework**: Mission gốc nếu Mission này là việc làm lại.
- **History**: Lịch sử thay đổi.

**Business rules:**

- Mỗi ngày có đúng một Primary Mission khi Daily Plan được xác nhận.
- Mỗi ngày có tối đa hai Supporting Missions.
- Không được có hai Primary Mission trong cùng một ngày.
- Mission chỉ Ready khi có output requirement, evidence requirement và completion criteria đầy đủ.
- Mission chỉ Completed sau Review Passed.
- Blocked không chuyển trực tiếp sang Completed.
- Mission cũ không bị ghi đè khi Rework.

**Quy tắc chỉnh sửa Mission:**

- Draft: được sửa trực tiếp.
- Ready và chưa có Learning Session: có thể Reopen to Draft để sửa.
- In Progress, Submitted, Completed, Needs Rework hoặc Blocked: không sửa trực tiếp định nghĩa Mission.
- Rework phải tạo Attempt mới hoặc tiếp tục theo quy tắc Rework.
- History phải được giữ.
- Không cho phép ghi đè Mission cũ.

---

## 9. Mission Attempt

**Mission** đại diện cho mục tiêu cần hoàn thành.

**Mission Attempt** đại diện cho một lần thực hiện cụ thể của Mission.

Mỗi Attempt phải liên kết:

- **Mission**: Mission gốc.
- **Learning Session**: Session thực hiện trong Attempt.
- **Daily Report** hoặc revision liên quan.
- **Output**: Output tạo ra trong Attempt.
- **Evidence**: Evidence thu thập trong Attempt.
- **Review**: Review kết quả Attempt.
- **Kết quả Attempt**: Kết quả cuối cùng của Attempt.

**Business rules:**

- Mission có thể có nhiều Attempt.
- Attempt đầu tiên được tạo khi bắt đầu thực hiện Mission.
- Review Rework tạo Attempt tiếp theo.
- Attempt trước được giữ nguyên.
- Một Attempt không thể vừa Pending Review vừa Needs Rework.
- Mission Completed khi có ít nhất một Attempt Review Passed.

---

## 10. Learning Session Model

**Learning Session** ghi nhận quá trình thực hành của một Mission Attempt.

Learning Session phải có:

- **Mission Attempt liên quan**: Session thuộc Attempt nào.
- **Thời gian bắt đầu**: Thời điểm bắt đầu session.
- **Thời gian kết thúc**: Thời điểm kết thúc session.
- **Nội dung**: Nội dung đã thực hiện trong session.
- **Khó khăn**: Khó khăn gặp phải.
- **Blocker**: Blocker nếu có.
- **Kết quả**: Kết quả thu được.
- **Trạng thái**: Planned, Active, Completed, Abandoned.

**Business rules:**

- Chỉ một Learning Session được Active tại một thời điểm trong MVP.
- Một Attempt có thể có nhiều Session.
- Session Active phải có luồng resume.
- Session Completed không đồng nghĩa Mission Completed.
- Session Abandoned phải giữ lý do.
- Thời gian học không phải evidence hoàn thành.

---

## 11. Daily Report Model

**Daily Report** tổng hợp hoạt động học tập của một ngày.

Quyết định CTO:

- Một ngày học có tối đa một Daily Report hiện hành.
- Daily Report có thể tổng hợp nhiều Mission và Session trong ngày.
- Review vẫn được thực hiện theo từng Mission Attempt.

Daily Report phải có:

- **Ngày báo cáo**: Ngày của báo cáo.
- **Mission đã thực hiện**: Danh sách Mission trong ngày.
- **Session liên quan**: Danh sách Learning Session.
- **Output**: Output đã tạo.
- **Evidence được liên kết**: Evidence thu thập.
- **Khó khăn**: Khó khăn gặp phải trong ngày.
- **Tự đánh giá**: Đánh giá của người dùng.
- **Trạng thái**: Draft, Submitted, Reviewed.
- **Revision hiện hành**: Revision đang hoạt động (nếu có).

**Business rules:**

- Draft được autosave ở cấp product requirement.
- Submit không được ghi đè.
- Sửa sau Submit tạo Daily Report Revision.
- Revision mới giữ liên kết với revision trước.
- Nếu dữ liệu đã review bị sửa, phải tạo Pending Review mới.
- Report nộp muộn vẫn hợp lệ và phải lưu thời gian nộp thực tế.

**Revision rules:**

- Không được ghi đè bản đã Submit.
- Được tạo revision mới.
- Revision phải giữ liên kết với bản trước.
- Nếu báo cáo đã được review, revision mới tạo Pending Review mới.
- Review cũ vẫn được giữ trong history.

---

## 12. Output Model

**Output** là sản phẩm người dùng tạo ra trong quá trình thực hành.

Output phải có:

- **Mô tả**: Mô tả sản phẩm.
- **Mission Attempt nguồn**: Attempt tạo ra Output.
- **Daily Report nguồn**: Daily Report liên kết.
- **Tham chiếu tới sản phẩm thực tế**: Đường dẫn, file hoặc mô tả truy cập.
- **Trạng thái khả dụng**: Available hoặc Unavailable.
- **History** nếu được sửa.

**Business rules:**

- Không có Output thì Mission không thể Passed.
- Output không tự động là Evidence.
- Một Output có thể hỗ trợ nhiều Evidence.
- Output bị mất hoặc không truy cập được phải được đánh dấu rõ.

---

## 13. Evidence Model

**Evidence** là bằng chứng dùng để chứng minh một Skill đã được chứng minh.

Trạng thái:

- Recorded (Đã ghi): Evidence đã được ghi nhận.
- Verified (Đã xác nhận): Evidence đã qua Review xác nhận.
- Invalid (Không hợp lệ): Evidence không truy cập được hoặc không hợp lệ.

Evidence phải liên kết:

- Output hoặc tham chiếu nguồn.
- Mission Attempt.
- Review xác nhận.
- Skill được chứng minh.
- History.

**Business rules:**

- Progress giữ bản ghi Evidence chuẩn.
- Today tạo hoặc liên kết Evidence.
- Reviews kiểm tra Evidence nhưng không tạo bản sao.
- Evidence chỉ Verified thông qua Review.
- Invalid Evidence không thể chứng minh Skill.
- Sửa Evidence đã Verified phải tạo revision hoặc yêu cầu review lại.
- Không hard-delete Evidence đã dùng trong Review.

---

## 14. Review Model

**Review** là quá trình đánh giá một Mission Attempt dựa trên Output, Evidence và Completion Criteria.

Review phải có:

- **Mission Attempt được review**: Attempt nào đang được review.
- **Output được kiểm tra**: Output liên quan.
- **Evidence được kiểm tra**: Evidence liên quan.
- **Completion Criteria**: Tiêu chí đã đáp ứng.
- **Kết quả**: Passed, Rework, Blocked.
- **Lý do**: Lý do cho kết quả.
- **Điểm yếu**: Weakness Observation nếu có.
- **Hành động tiếp theo**: Hành động cần thực hiện.
- **Thời điểm review**: Thời gian review.
- **Tính hiện hành của review**: Review hiện hành hay historical.

Kết quả review chỉ có: Passed, Rework, Blocked.

**Business rules:**

- Review bắt đầu ở Pending.
- Passed chỉ khi đủ Output, Evidence và toàn bộ Completion Criteria.
- Rework phải có lý do và hành động sửa.
- Blocked phải có blocker và hành động gỡ.
- Review cũ không bị xóa khi dữ liệu được revision.
- Khi dữ liệu nguồn thay đổi, review cũ trở thành historical và Pending Review mới được tạo.
- Review không phải AI Chat.

---

## 15. Weakness Observation

**Weakness Observation** là ghi nhận một điểm yếu tại một thời điểm cụ thể.

Phải liên kết:

- **Review nguồn**: Observation xuất phát từ Review nào.
- **Mission Attempt**: Attempt liên quan.
- **Skill liên quan** nếu có.
- **Mô tả cụ thể**: Mô tả chi tiết điểm yếu.
- **Hành động khắc phục**: Hành động đề xuất.
- **Trạng thái xử lý**: Open hoặc Resolved.

**Business rules:**

- Không ghi điểm yếu chung chung.
- Điểm yếu lặp lại được xác định từ nhiều Observation.
- Không tự động kết luận điểm yếu nếu dữ liệu chưa đủ.
- History phải được giữ.

---

## 16. Skill Model

**Skill** là kỹ năng đang theo dõi trong chương trình học.

Skill có ba trạng thái:

- **Chưa bắt đầu**: Chưa có Evidence hoặc Learning Session.
- **Đang học**: Đang trong quá trình học, chưa có Evidence Verified.
- **Đã chứng minh**: Có ít nhất một Evidence Verified.

**Business rules:**

- Skill chỉ chuyển sang Đã chứng minh khi có Verified Evidence.
- Thời gian học không đủ để nâng trạng thái Skill.
- Mọi thay đổi tạo Skill History Entry.
- Không tự động hạ trạng thái Skill.
- Hạ trạng thái chỉ xảy ra qua reassessment có lý do và history.
- Không có score, level, ranking hoặc gamification trong MVP.

---

## 17. Weekly Review Model

**Weekly Review** là đánh giá tổng hợp toàn bộ hoạt động trong một tuần.

Weekly Review phải có:

- **Tuần được review**: Week Plan liên quan.
- **Mission summary**: Tổng hợp Mission trong tuần.
- **Session summary**: Tổng hợp Learning Session.
- **Output summary**: Tổng hợp Output.
- **Evidence summary**: Tổng hợp Evidence.
- **Weakness lặp lại**: Điểm yếu xuất hiện nhiều lần.
- **Skill changes**: Thay đổi trạng thái Skill.
- **Roadmap adherence**: Mức độ bám Roadmap.
- **Rework tồn đọng**: Rework chưa giải quyết.
- **Primary Focus tuần sau**: Đề xuất trọng tâm tuần sau.
- **Data Completeness**: Complete hoặc Incomplete.
- **Dữ liệu thiếu**: Nếu Incomplete, liệt kê dữ liệu thiếu.
- **Ảnh hưởng tới kết luận**: Nếu Incomplete, ghi ảnh hưởng.
- **Hành động bổ sung**: Hành động bổ sung dữ liệu.

Data Completeness:

- **Complete**: Tuần có đủ dữ liệu.
- **Incomplete**: Tuần thiếu dữ liệu.

**Business rules:**

- Weekly Review vẫn có trạng thái Reviewed khi Incomplete.
- Không tạo kết luận giả.
- Người dùng phải bổ sung dữ liệu hoặc xác nhận chấp nhận thiếu dữ liệu.
- Weekly Review tạo đầu vào cho Roadmap Revision và Week Plan tiếp theo.

---

## 18. Backup Record

**Backup Record** chỉ mô tả nghiệp vụ backup, không mô tả định dạng hoặc công nghệ.

Backup Record phải có:

- **Thời điểm backup**: Thời gian thực hiện backup.
- **Kết quả**: Success hoặc Failed.
- **Phạm vi dữ liệu**: Dữ liệu nào được backup.
- **Trạng thái**: Trạng thái backup.
- **Lỗi nếu có**: Lỗi chi tiết nếu thất bại.
- **Restore nguồn nếu được sử dụng**: Nếu restore từ backup này.

**Business rules:**

- Backup thất bại không được ghi đè bản backup thành công trước.
- Restore không được âm thầm ghi đè dữ liệu hiện tại.
- Phải có bước xem trước ảnh hưởng và xác nhận.
- Sau restore phải xác định lại Primary Next Action.

---

## 19. Relationship Map

| Source Object | Relationship | Target Object | Cardinality nghiệp vụ | Ý nghĩa |
|---|---|---|---|---|
| Career Context | contains | Career Goal | 1 → 3 | Career Context chứa 3 Career Goals (1 năm, 2 năm, 3 năm) |
| Career Context | has active | Current Focus | 1 → 1 | Career Context có một Current Focus đang hoạt động |
| Career Context | creates | Roadmap | 1 → 1 | Career Context tạo Roadmap đầu tiên |
| Roadmap | has history | Roadmap Revision | 1 → N | Mỗi lần điều chỉnh Roadmap tạo một Revision |
| Roadmap | contains | Week Plan | 1 → N | Roadmap chứa các Week Plan |
| Week Plan | contains | Mission | 1 → N | Week Plan chứa các Mission trong tuần |
| Mission | has execution | Mission Attempt | 1 → N | Mỗi Mission có thể có nhiều Attempt |
| Mission Attempt | has session | Learning Session | 1 → N | Một Attempt có nhiều Learning Session |
| Daily Report | has revision | Daily Report Revision | 1 → N | Daily Report có thể có nhiều Revision |
| Daily Report | contains | Mission Attempt | 1 → N | Daily Report tổng hợp nhiều Attempt |
| Mission Attempt | produces | Output | 1 → N | Attempt tạo ra Output |
| Mission Attempt | has evidence | Evidence | 1 → N | Attempt liên kết Evidence |
| Mission Attempt | reviewed by | Review | 1 → N | Attempt được review |
| Review | observes | Weakness Observation | 1 → N | Review tạo Weakness Observation |
| Review | updates | Skill History Entry | 1 → N | Review tạo Skill History Entry |
| Skill | proven by | Evidence | 1 → N | Skill được chứng minh bởi Evidence |
| Skill | has history | Skill History Entry | 1 → N | Skill có nhiều Skill History Entry |
| Week Plan | reviewed by | Weekly Review | 1 → 1 | Week Plan có một Weekly Review |
| Weekly Review | creates | Roadmap Revision | 1 → N | Weekly Review tạo Roadmap Revision |
| Backup Record | used by | Restore action | 1 → 0..1 | Backup Record có thể dùng để restore |

Không dùng ký hiệu database.

---

## 20. State Transition Matrix

### Onboarding

| From | Trigger | To | Điều kiện | Transition không hợp lệ cần ngăn chặn |
|---|---|---|---|---|
| Draft | Người dùng hoàn thành onboarding (Career Context, Goals, lịch học, Current Focus, Skill ban đầu, bản nháp Mission) | Completed | Tất cả dữ liệu bắt buộc đã nhập | Draft → Completed nếu thiếu dữ liệu |

### Mission

| From | Trigger | To | Điều kiện | Transition không hợp lệ cần ngăn chặn |
|---|---|---|---|---|
| Draft | Người dùng xác nhận, đủ tiêu chí | Ready | Có output, evidence, completion criteria | Draft → In Progress nếu chưa Ready |
| Ready | Người dùng bắt đầu Learning Session | In Progress | — | Ready → Submitted (phải qua In Progress) |
| In Progress | Người dùng nộp Daily Report | Submitted | Có Daily Report Submitted | In Progress → Completed (phải qua Review) |
| In Progress | Phát hiện blocker | Blocked | Có blocker | Blocked → Completed (phải qua Review) |
| Submitted | Review Passed | Completed | Review đã Passed | Submitted → Completed nếu chưa Review Passed |
| Submitted | Review Rework | Needs Rework | Review đã Rework | — |
| Submitted | Review Blocked | Blocked | Review đã Blocked | — |
| Needs Rework | Người dùng bắt đầu lại | In Progress | Có Attempt mới | Needs Rework → Completed (phải qua Review) |
| Blocked | Blocker được gỡ | In Progress | Có hành động gỡ | Blocked → Completed (phải qua Review) |
| Ready | Người dùng chỉnh sửa | Draft | Chưa có Learning Session | — |

### Learning Session

| From | Trigger | To | Điều kiện | Transition không hợp lệ cần ngăn chặn |
|---|---|---|---|---|
| Planned | Người dùng bắt đầu phiên | Active | — | Planned → Completed (phải qua Active) |
| Active | Người dùng kết thúc phiên | Completed | Có nội dung, kết quả | Active → Abandoned nếu kết thúc bình thường |
| Active | Người dùng bỏ dở | Abandoned | Ghi lý do | Abandoned → Completed không hợp lệ |
| Active | Ứng dụng đóng | Active (resume) | — | — |

### Daily Report

| From | Trigger | To | Điều kiện | Transition không hợp lệ cần ngăn chặn |
|---|---|---|---|---|
| Draft | Người dùng nộp báo cáo | Submitted | Có output và evidence | Draft → Reviewed (phải qua Submitted) |
| Submitted | Review hoàn tất | Reviewed | Review đã xong | Submitted → Draft (tạo Revision) |

Ngoài ra:

- Sửa Daily Report đã Submitted không được ghi đè, tạo Daily Report Revision mới.
- Daily Report Revision mới giữ liên kết với revision trước.
- Nếu dữ liệu đã review bị sửa, revision mới tạo Pending Review mới.

### Review

| From | Trigger | To | Điều kiện | Transition không hợp lệ cần ngăn chặn |
|---|---|---|---|---|
| Pending | Evaluator đánh giá | Passed | Đủ output, evidence, completion criteria | Pending → Needs Rework trực tiếp |
| Pending | Evaluator đánh giá | Rework | Chưa đạt output, evidence hoặc tiêu chí | — |
| Pending | Evaluator đánh giá | Blocked | Có blocker | — |
| Passed | — | — | — | Passed → Rework/Blocked (đã hoàn tất) |
| Rework | Người dùng tạo Attempt mới | Pending (Attempt mới) | — | Rework → Passed trực tiếp |
| Blocked | Blocker được gỡ | Pending (Attempt mới) | — | Blocked → Passed trực tiếp |

### Week

| From | Trigger | To | Điều kiện | Transition không hợp lệ cần ngăn chặn |
|---|---|---|---|---|
| Planned | Tuần bắt đầu | Active | Trước ngày học đầu tiên | Planned → Review Due (phải qua Active) |
| Active | Tuần kết thúc, đến hạn review | Review Due | — | Active → Reviewed (phải qua Review Due) |
| Review Due | Weekly Review hoàn thành | Reviewed | Có Weekly Review | Review Due → Active (tuần mới) |
| Reviewed | Tuần mới bắt đầu | Planned (tuần mới) | — | — |

### Evidence

| From | Trigger | To | Điều kiện | Transition không hợp lệ cần ngăn chặn |
|---|---|---|---|---|
| Recorded | Review xác nhận | Verified | Review Passed | Recorded → Invalid (qua Review) |
| Recorded | Review hoặc hệ thống phát hiện không hợp lệ | Invalid | Evidence không truy cập được | Verified → Recorded (phải qua Review lại) |
| Invalid | Người dùng sửa thành Evidence hợp lệ | Recorded | Có evidence mới hoặc đã sửa | Invalid → Verified trực tiếp |

---

## 21. Business Rule Catalog

| Rule ID | Business Rule | Objects | Lý do | Vi phạm phải xử lý thế nào |
|---|---|---|---|---|
| BR-001 | Một người dùng trong MVP | Career Context | MVP chỉ phục vụ một người dùng duy nhất | Thiết kế multi-user sau MVP |
| BR-002 | Onboarding là prerequisite | Onboarding, Today | Career Context phải được tạo trước khi dùng Today | Chuyển đến Onboarding |
| BR-003 | Một Current Focus đang hoạt động | Current Focus | Mỗi thời điểm chỉ một trọng tâm | Archive Focus cũ, tạo Focus mới |
| BR-004 | Một Primary Mission mỗi ngày | Mission | One Main Focus At A Time | Chặn tạo Primary Mission thứ hai, yêu cầu người dùng chọn loại Mission |
| BR-005 | Tối đa hai Supporting Missions mỗi ngày | Mission | Giới hạn thời gian học | Từ chối Mission thứ ba |
| BR-006 | Mission Ready phải đủ requirement | Mission | Đảm bảo Mission có thể thực hiện | Không cho Ready nếu thiếu output/evidence/criteria |
| BR-007 | Chỉ một Active Learning Session | Learning Session | Tránh rối loạn phiên | Kết thúc phiên trước khi bắt đầu mới |
| BR-008 | Session không chứng minh hoàn thành | Learning Session | Thời gian học không bằng năng lực | Mission Completed chỉ khi có Output, Evidence, Completion Criteria đáp ứng và Review Passed |
| BR-009 | Một Daily Report hiện hành mỗi ngày | Daily Report | Tránh báo cáo trùng lặp | Chặn tạo Daily Report thứ hai |
| BR-010 | Submit không ghi đè | Daily Report | Bảo vệ bản ghi đã nộp | Tạo Revision thay vì ghi đè |
| BR-011 | Mission Completion cần Review Passed | Mission, Review | Bảo vệ chất lượng | Không cho Completed nếu chưa Review Passed |
| BR-012 | Evidence Verified cần Review | Evidence, Review | Evidence chỉ xác thực qua Review | Chặn Verified nếu chưa Review |
| BR-013 | Skill Proven cần Verified Evidence | Skill, Evidence | Skill chỉ chứng minh khi có Evidence | Không chuyển Proven nếu chưa Evidence Verified |
| BR-014 | Rework tạo Attempt mới | Mission Attempt | Lịch sử Attempt được giữ | Tạo Attempt mới thay vì sửa Attempt cũ |
| BR-015 | Blocked không chuyển trực tiếp Completed | Mission | Tránh bỏ qua bước review | Ép thực hiện lại hoặc review trước khi Completed |
| BR-016 | Report nộp muộn vẫn giữ thời gian thực tế | Daily Report | Theo dõi độ tin cậy dữ liệu | Ghi thời gian nộp thực tế, không dùng giờ học |
| BR-017 | Skipped Day không tự động là thất bại | Week Plan | Ghi nhận thực tế, không phán xét | Đánh dấu ngày bỏ trống, không tự động fail |
| BR-018 | Weekly Review Incomplete không giả tạo kết luận | Weekly Review | Tránh dữ liệu sai lệch | Yêu cầu bổ sung dữ liệu hoặc xác nhận chấp nhận |
| BR-019 | Dữ liệu đã review phải giữ history | Review, Daily Report | Không mất bằng chứng đã kiểm tra | Archive review cũ, tạo review mới khi revision |
| BR-020 | Restore không silent overwrite | Backup Record | Bảo vệ dữ liệu hiện tại | Yêu cầu xác nhận trước khi restore |
| BR-021 | Career Context có thể tồn tại dạng Draft | Career Context | Onboarding chưa hoàn thành vẫn lưu Career Context | Không yêu cầu hoàn thiện để lưu Draft |
| BR-022 | Settings & Data luôn truy cập được | Settings & Data | Người dùng cần truy cập dữ liệu bất kỳ thời gian nào | Không block Settings & Data |
| BR-023 | Mission Attempt không vừa Pending Review vừa Needs Rework | Mission Attempt | Tránh trạng thái mâu thuẫn | Pending Review và Needs Rework là trạng thái khác nhau |
| BR-024 | Revision phải giữ liên kết với bản trước | Daily Report Revision | Duy trì traceability | Revision tham chiếu revision trước |
| BR-025 | Không ghi đè Mission cũ khi Rework | Mission | Lịch sử Mission được giữ | Tạo Attempt mới hoặc Mission mới cho Rework |

---

## 22. Create, Update, Revision, Archive và Delete

### Ma trận quy tắc cho từng object chính

| Object | Có Draft không? | Khi nào sửa trực tiếp? | Khi nào tạo Revision? | Khi nào Archive? | Có Hard Delete không? | History bắt buộc? |
|---|---|---|---|---|---|---|
| Career Context | Có | Khi Draft hoặc sau onboarding (sửa thông tin) | Khi thay đổi Current Focus | Khi chuyển Focus mới | Không | Có |
| Career Goal | Có | Khi Draft hoặc chưa dùng | Khi điều chỉnh mục tiêu | Khi mục tiêu hoàn thành | Không | Có |
| Current Focus | Có | Khi Draft | Khi chuyển thành Focus mới | Khi không còn active | Không | Có |
| Roadmap | Có | Khi chưa có phụ thuộc Week Plan | Khi điều chỉnh sau Weekly Review | Khi thay thế bởi Roadmap mới | Không | Có |
| Roadmap Revision | Không | Không sửa | Luôn tạo mới khi có thay đổi | Khi không còn dùng | Không | Có |
| Week Plan | Có | Khi Planned, trước khi bắt đầu tuần | Khi thay đổi sau tuần bắt đầu | Khi tuần kết thúc | Không | Có |
| Mission | Có | Khi Draft hoặc Ready (chưa có Session) | Khi rework (tạo Attempt mới) | Khi Completed | Không | Có |
| Mission Attempt | Không | Khi New (chưa review) | Luôn tạo mới cho mỗi lần thực hiện | Khi Attempt kết thúc | Không | Có |
| Learning Session | Có | Khi Planned hoặc Active | Không | Khi Completed/Abandoned | Chỉ khi Planned | Có |
| Daily Report | Có | Khi Draft | Khi sửa sau Submit | Khi Reviewed | Không | Có |
| Daily Report Revision | Không | Khi Draft (trước khi submit lại) | Luôn tạo mới khi sửa sau Submit | Khi review xong | Không | Có |
| Output | Có | Khi Draft | Khi sửa thông tin | Khi không còn dùng | Không | Có |
| Evidence | Có | Khi Recorded | Khi sửa Evidence đã Verified | Khi Invalid | Không | Có |
| Review | Có | Khi Pending | Khi dữ liệu nguồn thay đổi | Khi kết thúc | Không | Có |
| Weakness Observation | Có | Khi Open | Khi thay đổi trạng thái | Khi Resolved | Không | Có |
| Skill | Không | Không sửa trực tiếp | Không | Khi Skill bị loại bỏ | Không | Có |
| Skill History Entry | Không | Không sửa | Luôn tạo mới khi có thay đổi | Khi không còn dùng | Không | Có |
| Weekly Review | Có | Khi Review Due | Không | Khi Reviewed | Không | Có |
| Backup Record | Không | Không sửa | Luôn tạo mới | Khi không còn dùng | Không | Có |

**Quy tắc chung:**

- Draft chưa được dùng có thể xóa.
- Dữ liệu đã Submit, Review hoặc dùng làm Evidence không hard-delete trong MVP.
- Correction phải giữ lịch sử.
- Không để object mồ côi khỏi Mission, Report hoặc Review nguồn.

---

## 23. Derived Product Information

Thông tin được suy ra (không phải nguồn dữ liệu):

| Derived Information | Source objects | Điều kiện suy ra | Không được ghi đè nguồn | Khi nào cần tính toán lại |
|---|---|---|---|---|
| Primary Next Action | Mission, Learning Session, Daily Report, Review, Weekly Review, Onboarding, Settings & Data | Dựa trên trạng thái và thứ tự ưu tiên toàn hệ thống | Không bao giờ | Khi bất kỳ source object nào thay đổi hoặc khi restore |
| Mission completion state | Mission Attempt, Review | Mission có ít nhất một Attempt Review Passed | Không bao giờ | Khi Review hoặc Attempt thay đổi |
| Pending Review blocking | Review, Mission Attempt | Review ở Pending và Mission chờ Daily Close hoặc Next Mission | Không bao giờ | Khi Review hoặc Mission thay đổi |
| Skill status recommendation | Skill, Evidence, Skill History Entry | Dựa trên Evidence Verified và lịch sử thay đổi | Không bao giờ | Khi Evidence hoặc Skill thay đổi |
| Repeated Weakness | Weakness Observation | Cùng Weakness xuất hiện ≥2 lần trong các Review khác nhau | Không bao giờ | Khi Weakness Observation mới được tạo |
| Roadmap adherence | Week Plan, Weekly Review, Mission | So sánh Mission thực hiện với kế hoạch trong Week Plan | Không bao giờ | Khi Weekly Review hoàn thành |
| Weekly Data Completeness | Daily Report | Tuần có đủ Daily Report và Review cho tất cả ngày học | Không bao giờ | Khi Daily Report hoặc Review thay đổi |
| Daily completion summary | Mission Attempt, Output, Evidence, Review | Tổng hợp kết quả trong ngày | Không bao giờ | Khi Daily Report được nộp hoặc Review xong |

Không thiết kế thuật toán. Chỉ định nghĩa nguồn dữ liệu và điều kiện.

---

## 24. End-to-End Data Trace

Ví dụ: Career Context → Roadmap → Week Plan → Mission → Mission Attempt → Learning Session → Daily Report → Output → Evidence → Review → Skill History → Weekly Review → Roadmap Revision

**Career Context**

- **Dữ liệu được tạo**: Hồ sơ, mục tiêu 1/2/3 năm, điểm mạnh/yếu, lịch học, Current Focus.
- **Dữ liệu tham chiếu**: — (nguồn gốc).
- **Trạng thái thay đổi**: Draft → Completed.
- **History được giữ**: Thay đổi Current Focus tạo bản ghi mới.

**Roadmap**

- **Dữ liệu được tạo**: Mục tiêu, trọng tâm, kết quả, thứ tự ưu tiên từ Career Context.
- **Dữ liệu tham chiếu**: Career Goal, Current Focus.
- **Trạng thái thay đổi**: Active → Archived (khi revision tạo roadmap mới).
- **History được giữ**: Roadmap Revision lưu mỗi lần thay đổi.

**Week Plan**

- **Dữ liệu được tạo**: Primary Focus, kết quả tuần, khung Mission cho tuần.
- **Dữ liệu tham chiếu**: Roadmap (trọng tâm, mục tiêu), Weakness từ Weekly Review tuần trước.
- **Trạng thái thay đổi**: Planned → Active → Reviewed.
- **History được giữ**: Thay đổi sau khi tuần bắt đầu tạo bản ghi mới.

**Mission**

- **Dữ liệu được tạo**: Mục tiêu, output, evidence, tiêu chí, loại Primary/Supporting.
- **Dữ liệu tham chiếu**: Week Plan (khung Mission).
- **Trạng thái thay đổi**: Draft → Ready → In Progress → Submitted → Completed.
- **History được giữ**: Mission Attempt, Mission Rework được giữ.

**Mission Attempt**

- **Dữ liệu được tạo**: Attempt mới khi bắt đầu thực hiện hoặc sau Rework.
- **Dữ liệu tham chiếu**: Mission.
- **Trạng thái thay đổi**: New → In Progress → Submitted → Reviewed.
- **History được giữ**: Attempt trước không bị xóa khi tạo Attempt mới.

**Learning Session**

- **Dữ liệu được tạo**: Thời gian bắt đầu/kết thúc, nội dung, khó khăn, kết quả.
- **Dữ liệu tham chiếu**: Mission Attempt.
- **Trạng thái thay đổi**: Active → Completed.
- **History được giữ**: Session bị Abandoned giữ lý do.

**Daily Report**

- **Dữ liệu được tạo**: Output, Evidence, khó khăn, tự đánh giá.
- **Dữ liệu tham chiếu**: Learning Session, Mission Attempt.
- **Trạng thái thay đổi**: Draft → Submitted → Reviewed.
- **History được giữ**: Revision tạo khi sửa sau Submit.

**Output**

- **Dữ liệu được tạo**: Mô tả sản phẩm, tham chiếu thực tế.
- **Dữ liệu tham chiếu**: Mission Attempt, Daily Report.
- **Trạng thái thay đổi**: Draft → Available.
- **History được giữ**: Lịch sử sửa Output được lưu.

**Evidence**

- **Dữ liệu được tạo**: Trạng thái, tham chiếu nguồn.
- **Dữ liệu tham chiếu**: Output, Mission Attempt, Skill.
- **Trạng thái thay đổi**: Recorded → Verified/Invalid.
- **History được giữ**: Evidence không bao giờ bị hard-delete.

**Review**

- **Dữ liệu được tạo**: Kết quả, lý do, điểm yếu, hành động tiếp theo.
- **Dữ liệu tham chiếu**: Mission Attempt, Output, Evidence.
- **Trạng thái thay đổi**: Pending → Passed/Rework/Blocked.
- **History được giữ**: Review cũ trở thành historical khi có revision.

**Skill History Entry**

- **Dữ liệu được tạo**: Thời điểm thay đổi, trạng thái mới, Evidence nguồn.
- **Dữ liệu tham chiếu**: Skill, Review, Evidence.
- **Trạng thái thay đổi**: Created.
- **History được giữ**: Tất cả các Entry đều được lưu.

**Weekly Review**

- **Dữ liệu được tạo**: Mission summary, Session summary, Output summary, Evidence summary, Weakness lặp lại, Skill changes, Data Completeness.
- **Dữ liệu tham chiếu**: Daily Report trong tuần, Review, Skill.
- **Trạng thái thay đổi**: Review Due → Reviewed.
- **History được giữ**: Weekly Review và revision được lưu.

**Roadmap Revision**

- **Dữ liệu được tạo**: Thay đổi trọng tâm, kết quả, thứ tự ưu tiên.
- **Dữ liệu tham chiếu**: Weekly Review.
- **Trạng thái thay đổi**: Draft → Final.
- **History được giữ**: Mỗi lần điều chỉnh tạo một Revision.

Không thêm ví dụ ngoài phạm vi nghề nghiệp hiện tại.

---

## 25. Invariants

Những điều tuyệt đối không được xảy ra:

- Hai Primary Mission cùng ngày.
- Hơn hai Supporting Missions trong một ngày.
- Mission Completed khi chưa Review Passed.
- Skill Proven không có Verified Evidence.
- Evidence Verified không có Review.
- Blocked chuyển thẳng Completed.
- Review Rework không có lý do.
- Report Submit bị ghi đè.
- Revision làm mất history.
- Restore âm thầm ghi đè.
- Week Reviewed Incomplete nhưng không ghi dữ liệu thiếu.
- Mission Attempt vừa Pending Review vừa Needs Rework.
- Daily Report Revision không giữ liên kết với revision trước.
- Onboarding Completed khi chưa có Current Focus.
- Roadmap cũ bị ghi đè khi có Revision mới.

---

## 26. Open Questions và Risks

| Rủi ro | Mô tả | Cách xử lý trong MVP |
|---|---|---|
| Object có nguy cơ quá chi tiết | Một số object như Weakness Observation có thể chi tiết quá mức cần thiết | Giới hạn thuộc tính bắt buộc, không thêm metadata phụ |
| Supporting record có nguy cơ trở thành capability | Mission Attempt, Daily Report Revision, Roadmap Revision, Skill History Entry có thể bị nhầm thành navigation mới | Không tạo UI riêng cho supporting records; chúng chỉ xuất hiện trong context của object chính |
| Business rule chưa đủ dữ liệu để chốt | Một số rule (ví dụ: điều kiện gỡ Blocked) cần dữ liệu thực tế để xác minh | Ghi là "cần xác minh sau khi có dữ liệu thực tế" trong Technical Data Design |
| Rule có nguy cơ over-engineering | Các trạng thái và transition có thể phức tạp hơn cần thiết | Giữ đúng 14 canonical view, không thêm state mới ngoài đã xác định |
| Quan hệ cần xác nhận trong Technical Data Design | Cardinality và referential integrity cần được kiểm chứng ở mức kỹ thuật | Ghi rõ dependency, để Technical Data Design quyết định implementation |
| Dữ liệu cần cho AI Mentor tương lai nhưng chưa thuộc MVP | AI Mentor cần data memory dài hạn, nhưng MVP chưa có vector database | Không thiết kế AI Memory hoặc vector database; chỉ đảm bảo dữ liệu có thể xuất ra để dùng sau này |
| Trường hợp sửa Evidence đã Verified | Cần xác định cơ chế revision cho Evidence | Tạo revision mới, giữ Evidence cũ, yêu cầu Review lại |
| Trường hợp Daily Report Revision tạo Pending Review mới | Cần xác định trigger chính xác | Khi Daily Report Revision chứa dữ liệu đã qua Review, tạo Pending Review mới |
| Primary Next Action khi có nhiều điều kiện đồng thời | Cần thứ tự ưu tiên rõ ràng | Được định nghĩa trong Global Next Action (IA Task 05) |
| Dữ liệu thiếu trong Weekly Review | Incomplete Data Completeness có thể ảnh hưởng kết quả | Yêu cầu bổ sung dữ liệu hoặc xác nhận chấp nhận |

Không tự thiết kế AI Memory hoặc vector database. Không tự thêm state hoặc object mới.

---

## 27. Handoff

Task tiếp theo: Task 08 — MVP Functional Requirements và Acceptance Criteria.

Tài liệu này cung cấp đầu vào:

- **Canonical objects**: 19 business objects đã xác định (cùng với 4 supporting records).
- **Relationships**: Relationship Map với cardinality nghiệp vụ.
- **State transitions**: State Transition Matrix cho 7 object (Onboarding, Mission, Learning Session, Daily Report, Review, Week, Evidence).
- **Business rules**: 25 business rules (BR-001 đến BR-025) trong Business Rule Catalog.
- **Validation rules**: Các quy tắc validation trong State Transition Matrix và Invariants.
- **Invariants**: 14 điều kiện tuyệt đối không được vi phạm.
- **Revision và history requirements**: Ma trận Create/Update/Revision/Archive/Delete và Business Rules BR-010, BR-014, BR-019, BR-024.

Tài liệu kèm theo:

- docs/01-product/04-mvp-screen-inventory-and-ux-requirements.md (đã cập nhật với quy tắc chỉnh sửa Mission, revision Daily Report, Pending Review/Needs Rework, Settings & Data luôn truy cập, Skill/Evidence Detail giữ riêng, Acceptance Criteria Matrix 14 view).
- docs/01-product/03-information-architecture-and-navigation.md (Relationship, ownership, navigation).
- docs/01-product/02-user-journey-and-core-flow.md (End-to-end flow).
