# Titan OS — AGENTS.md

> Tài liệu này cung cấp context bền vững cho coding agent làm việc trên Titan OS.
> Mọi agent phải đọc tài liệu này trước khi thực hiện thay đổi.

---

## 1. Product Identity

- **Tên**: Titan OS
- **Mô tả**: Career Operating System — Hệ điều hành cho sự nghiệp cá nhân
- **Mục tiêu**: Giúp người dùng biết hôm nay cần học gì, đã tạo ra output gì, kỹ năng nào đang yếu, và điều chỉnh lộ trình dựa trên dữ liệu
- **Người dùng đầu tiên**: Một nhân sự agency không có mentor trực tiếp, muốn trở thành Senior Digital Solutions Consultant trong 3 năm

---

## 2. Single-User và Local-First Constraints

- **Single-user**: Chỉ phục vụ một người dùng duy nhất trong MVP
- **Local-first**: Dữ liệu thuộc về người dùng, chạy trên máy cá nhân
- **Không authentication**: Không có đăng nhập, không có multi-user
- **Không SaaS**: Không triển khai dạng dịch vụ đám mây đa người dùng
- **Không cloud dependency bắt buộc**: Cloud chỉ là lựa chọn tương lai
- **Không team collaboration**: Không quản lý đội nhóm
- **Không CRM/ERP**: Không phải hệ thống quản lý khách hàng hoặc doanh nghiệp

---

## 3. Approved Tech Stack

- Next.js 15
- App Router
- TypeScript
- Tailwind CSS
- shadcn/ui (chưa cài trong Task này)
- Prisma (chưa cài trong Task này)
- SQLite (chưa cài trong Task này)
- Zustand (chưa cài trong Task này)
- Zod (chưa cài trong Task này)
- Recharts (chưa cài trong Task này)

**Lưu ý**: Task này chỉ cài dependency thực sự cần cho baseline: next, react, react-dom, typescript, tailwindcss, postcss, autoprefixer, eslint.

---

## 4. Những Thứ Không Xây Trong MVP

- Dashboard thật
- Database design
- Prisma schema
- Authentication
- Feature nghiệp vụ
- shadcn/ui components
- Zustand store
- Zod schemas
- Recharts
- Các view từ Product Data Model
- Các capability từ MVP Screen Inventory (chỉ xây dần theo roadmap 50 Task)

---

## 5. Coding Principles

- **Product trước, Architecture sau, Code cuối cùng**
- **Output First**: Không có output thì chưa được coi là đã học
- **Evidence First**: Kỹ năng phải có bằng chứng
- **Data Driven**: Mọi đánh giá phải dựa trên dữ liệu
- **Local First**: Dữ liệu thuộc về người dùng
- **One Main Focus At A Time**: Mỗi thời điểm chỉ một trọng tâm chính
- **Maintainability**: Kiến trúc đủ dùng trong 3 năm, không over-engineering
- **No FOMO**: Không học theo xu hướng nếu không phục vụ mục tiêu 3 năm
- **Preserve History**: Lịch sử không được ghi đè, không xóa âm thầm

---

## 6. Git Workflow

- Nhánh làm việc: `main`
- Commit message phải rõ ràng, mô tả thay đổi
- Không commit nếu chưa được yêu cầu
- Không push nếu chưa được yêu cầu
- Trước khi commit, kiểm tra `git status --short`
- Nếu working tree có thay đổi chưa commit, liệt kê và đánh giá trước khi thực hiện

---

## 7. Plan Mode và Act Mode Workflow

- **Plan Mode**: Chỉ khảo sát và lập kế hoạch. Không sửa file, không tạo file, không xóa file, không cài package, không chạy lệnh tạo project, không commit, không push.
- **Act Mode**: Thực hiện theo PLAN đã được CTO duyệt. Mọi thay đổi phải nằm trong phạm vi PLAN.
- **Transition**: Plan → Act chỉ khi CTO duyệt PLAN. Không tự động chuyển sang Act.

---

## 8. Tổng Quan Roadmap 50 Task

- **Task 01-07**: Product Definition (đã hoàn thành)
  - Task 01: Foundation Baseline (đang thực hiện)
  - Task 02-07: Product context, vision, scope, user journey, IA, screen inventory, data model
- **Task 08-14**: Technical Foundation
- **Task 15-21**: Core Features — Daily Loop
- **Task 22-28**: Core Features — Weekly Loop
- **Task 29-35**: AI Mentor Integration
- **Task 36-42**: Analytics và Reporting
- **Task 43-50**: Polish, Testing và Deployment

Chi tiết từng task được định nghĩa trong tài liệu sản phẩm trong thư mục `docs/`.

---

## 9. Các Lệnh Dev, Lint, Typecheck và Build

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint
npm run lint

# TypeScript type checking
npm run typecheck
```

---

## 10. Trạng Thái Triển Khai Hiện Tại

- **Giai đoạn**: Foundation Baseline (Task S01-T01)
- **Nhánh**: main
- **Đã có**: Tài liệu sản phẩm đầy đủ trong `docs/`
- **Đang xây**: Next.js 15 foundation với TypeScript, Tailwind CSS, ESLint
- **Chưa có**: Database, authentication, business logic, UI components

---

## 11. Quy Tắc Không Xóa Docs hoặc History

- **KHÔNG XÓA** bất kỳ file nào trong `docs/`
- **KHÔNG XÓA** bất kỳ commit nào trong git history
- **KHÔNG RESET** hoặc ghi đè tài liệu đã có
- Tài liệu trong `docs/` là nguồn sự thật (source of truth) cho sản phẩm
- Mọi thay đổi về sản phẩm phải giữ nguyên lịch sử

---

## 12. Quy Tắc Không Đọc, Log hoặc Commit Secret

- **KHÔNG ĐỌC** file chứa secret (`.env`, credential, password, token, key)
- **KHÔNG LOG** secret vào terminal hoặc output
- **KHÔNG COMMIT** secret vào git
- Sử dụng `.env.local` cho biến môi trường local (đã có trong `.gitignore` mặc định của Next.js)
- Không hard-code credential trong mã nguồn

---

## 13. Cấu Trúc Thư Mục Dự Án

```
titan-os/
├── docs/                    # Tài liệu sản phẩm (KHÔNG XÓA)
│   ├── 00-context/
│   ├── 01-product/
│   └── 02-product-model/
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── .eslintrc.json
└── AGENTS.md
```

---

## 14. Path Alias

TypeScript path alias đã được cấu hình:

```json
{
  "paths": {
    "*": ["./src/*"]
  }
}
```

Sử dụng `import { something } from '@/components/...'` thay vì relative path.

---

## 15. Nguyên Tắc Khi Làm Việc Với Tài Liệu

- Đọc toàn bộ `docs/00-context/`, `docs/01-product/`, `docs/02-product-model/` trước khi làm việc
- Tài liệu là context tiền đề, phải được giữ nguyên
- Không xóa hoặc reset tài liệu hiện có
- Mọi quyết định công nghệ phải được CTO phê duyệt trước khi triển khai

---

## 16. Lưu Ý Quan Trọng

- Task này chỉ thiết lập foundation baseline
- Chưa cài Prisma, shadcn/ui, Zustand, Zod, Recharts
- Chưa xây dashboard thật
- Chưa thiết kế database
- Chưa tạo Prisma schema
- Chưa tạo authentication
- Chưa triển khai feature nghiệp vụ
- Chỉ tạo trang chủ tối thiểu với tên, mô tả và trạng thái Foundation

---

**Last updated**: Task S01-T01 — Foundation Baseline
**Maintained by**: CTO và Senior Software Engineer