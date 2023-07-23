function no_space(string $s): string {
  $pattern = '/\s/';
  return preg_replace($pattern,'',$s);
}
