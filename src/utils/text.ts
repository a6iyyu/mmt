"use client";

/**
 * @description
 * Kelas utilitas untuk manipulasi teks.
 */
class Text {
  /**
   * @param text - Teks yang akan dipotong
   * @param mobileLength - Panjang maksimum teks pada tampilan mobile (opsional)
   * @param maxLength - Panjang maksimum teks pada tampilan desktop (default: 30)
   * @returns string - Teks yang telah dipotong, dengan " ..." di akhir jika teks asli melebihi panjang maksimum
   * @description
   * Memotong teks jika melebihi panjang maksimum yang ditentukan.
   */
  public static truncate(text?: string, mobileLength?: number, maxLength: number = 30): string {
    if (!text) return "";

    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    if (text.length > (isMobile && mobileLength ? mobileLength : maxLength)) return text.substring(0, maxLength - 5) + " ...";

    return text;
  }
}

export const Truncate = Text.truncate;
export { Text };