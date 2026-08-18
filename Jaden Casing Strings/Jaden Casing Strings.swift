import Foundation

extension String {
    func toJadenCase() -> String {
      self.components(separatedBy: " ")
            .map { word in
                guard let first = word.first else { return "" }
                return first.uppercased() + word.dropFirst().lowercased()
            }
            .joined(separator: " ")
    }
}
