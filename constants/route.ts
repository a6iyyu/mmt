/* =======================
   API ROUTES
   ======================= */
export const API_COURSES_CREATE = "/api/courses/create";
export const API_COURSES_PATCH = (id: number) => `/api/courses/${id}/patch`;
export const API_COURSES_DELETE = (id: number) => `/api/courses/${id}/delete`;

export const API_CREATIONS_CREATE = "/api/creations/create";
export const API_CREATIONS_PATCH = (id: number) => `/api/creations/${id}/patch`;
export const API_CREATIONS_DELETE = (id: number) => `/api/creations/${id}/delete`;

export const API_STUDENTS_CREATE = "/api/students/create";
export const API_STUDENTS_PATCH = (id: number) => `/api/students/${id}/patch`;
export const API_STUDENTS_DELETE = (id: number) => `/api/students/${id}/delete`;

export const API_LECTURERS_CREATE = "/api/lecturers/create";
export const API_LECTURERS_PATCH = (id: number) => `/api/lecturers/${id}/patch`;
export const API_LECTURERS_DELETE = (id: number) => `/api/lecturers/${id}/delete`;

export const API_RESEARCH_CREATE = "/api/research/create";
export const API_RESEARCH_PATCH = (id: number) => `/api/research/${id}/patch`;
export const API_RESEARCH_DELETE = (id: number) => `/api/research/${id}/delete`;

/* =======================
   COMMON ROUTES
   ======================= */
export const ADMIN = "/admin";
export const LOGIN = "/masuk";
export const API_AUTH_LOGIN = "/api/auth/login";
export const API_AUTH_LOGOUT = "/api/auth/logout";

/* =======================
   COMMON ROUTES
   ======================= */
export const HOME = "/";
export const CATEGORY = "/kategori";
export const CREATIONS = "/karya";
export const COURSES = "/pelatihan";
export const MEMBER = "/anggota";
export const LECTURER = "/dosen";
export const RESEARCH = "/riset";

/* =======================
   CMS (ADMIN) ROUTES
   ======================= */
export const ADMIN_DASHBOARD = "/admin";

export const ADMIN_STUDENT = "/admin/mahasiswa";
export const ADMIN_STUDENT_CREATE = "/admin/mahasiswa/tambah";
export const ADMIN_STUDENT_DETAIL = (id: number) => `/admin/mahasiswa/${id}/detail`;
export const ADMIN_STUDENT_EDIT = (id: number) => `/admin/mahasiswa/${id}/edit`;
export const ADMIN_STUDENT_DELETE = (id: number) => `/admin/mahasiswa/${id}/hapus`;

export const ADMIN_LECTURERS = "/admin/dosen";
export const ADMIN_LECTURERS_CREATE = "/admin/dosen/tambah";
export const ADMIN_LECTURERS_DETAIL = (id: number) => `/admin/dosen/${id}/detail`;
export const ADMIN_LECTURERS_EDIT = (id: number) => `/admin/dosen/${id}/edit`;
export const ADMIN_LECTURERS_DELETE = (id: number) => `/admin/dosen/${id}/hapus`;

export const ADMIN_CATEGORIES = "/admin/kategori";

export const ADMIN_CREATIONS = "/admin/karya";
export const ADMIN_CREATIONS_CREATE = "/admin/karya/tambah";
export const ADMIN_CREATIONS_DETAIL = (id: number) => `/admin/karya/${id}/detail`;
export const ADMIN_CREATIONS_EDIT = (id: number) => `/admin/karya/${id}/edit`;
export const ADMIN_CREATIONS_DELETE = (id: number) => `/admin/karya/${id}/hapus`;

export const ADMIN_COURSES = "/admin/pelatihan";
export const ADMIN_COURSES_CREATE = "/admin/pelatihan/tambah";
export const ADMIN_COURSES_DETAIL = (id: number) => `/admin/pelatihan/${id}/detail`;
export const ADMIN_COURSES_EDIT = (id: number) => `/admin/pelatihan/${id}/edit`;
export const ADMIN_COURSES_DELETE = (id: number) => `/admin/pelatihan/${id}/hapus`;

export const ADMIN_RESEARCH = "/admin/riset";
export const ADMIN_RESEARCH_CREATE = "/admin/riset/tambah";
export const ADMIN_RESEARCH_DETAIL = (id: number) => `/admin/riset/${id}/detail`;
export const ADMIN_RESEARCH_EDIT = (id: number) => `/admin/riset/${id}/edit`;
export const ADMIN_RESEARCH_DELETE = (id: number) => `/admin/riset/${id}/hapus`;