document.getElementById('applyButton').addEventListener('click', function() {
    // 입력된 주소 값을 가져오기
    var inputText = document.getElementById('주소').value;

    // 16진수 문자열을 숫자로 변환
    var baseValue = parseInt(inputText, 16);

    // 변환에 실패한 경우 (유효하지 않은 16진수 값인 경우)
    if (isNaN(baseValue)) {
        alert('유효한 16진수 값을 입력하세요.');
        return;
    }

    // 메모리 테이블의 모든 행을 가져오기
    var rows = document.querySelectorAll('#memoryTable tr');

    // 각 행의 두 번째 셀에 증가된 값을 삽입
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        // baseValue를 16진수 문자열로 변환하여 셀에 삽입
        cells[1].textContent = baseValue.toString(16).toUpperCase().padStart(8, '0');
        baseValue++; // 값을 1씩 증가
    }
});
// 오른쪽 컴파일 버튼 클릭 시 동작 정의
document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 동작 방지

    // 여기에 컴파일 버튼 클릭 시 수행할 동작 추가

});
