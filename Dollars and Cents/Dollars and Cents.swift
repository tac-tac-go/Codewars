import Foundation
func formatMoney(_ val:Double) -> String {
  "$\(String(format : "%.2f",val))"
}
