bool valid_spacing(String text) {
  return text.trim() == text && !text.contains("  ");
}
