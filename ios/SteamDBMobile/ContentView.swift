import SwiftUI

struct ContentView: View {
    @StateObject private var viewModel = WebViewModel(
        initialURL: URL(string: "https://steamdb.info")!
    )

    var body: some View {
        NavigationStack {
            VStack(spacing: 0) {
                WebView(viewModel: viewModel)
                Divider()
                HStack(spacing: 24) {
                    Button(action: viewModel.goBack) {
                        Label("Назад", systemImage: "chevron.left")
                    }
                    .disabled(!viewModel.canGoBack)

                    Button(action: viewModel.goForward) {
                        Label("Вперед", systemImage: "chevron.right")
                    }
                    .disabled(!viewModel.canGoForward)

                    Button(action: viewModel.reload) {
                        Label("Оновити", systemImage: "arrow.clockwise")
                    }

                    Spacer()

                    Menu {
                        Button("Відкрити steamdb.info") {
                            viewModel.load(URL(string: "https://steamdb.info")!)
                        }
                        Button("API SteamDB") {
                            viewModel.load(URL(string: "https://steamdb.info/api/")!)
                        }
                    } label: {
                        Label("Меню", systemImage: "ellipsis.circle")
                    }
                }
                .font(.subheadline)
                .padding(.horizontal, 16)
                .padding(.vertical, 12)
                .background(.ultraThinMaterial)
            }
            .navigationTitle("SteamDB Mobile")
            .navigationBarTitleDisplayMode(.inline)
        }
    }
}

#Preview {
    ContentView()
}
