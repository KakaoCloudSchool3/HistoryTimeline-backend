package kakao.school.what.dto;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class HistoryDetailPopDTO {
    private String detail;

    public HistoryDetailPopDTO(String detail) {
        this.detail = detail;
    }
}
